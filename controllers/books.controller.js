import prisma from "../config/database.config.js";
import { validationResult } from "express-validator";
import { getFileUrl, uploadFile, deleteFile } from "./cloudinary.controller.js";
import { isCategoryExist } from "./categories.controller.js";
import logger from "../config/logger.config.js";

export const getBooks = async (req, res) => {
  try {
    //menggunakan prisma client untuk mengambil semua data buku dari database
    const books = await prisma.books.findMany();

    //add coverUrl to each book
    books.forEach((book) => {
      if (!book.cloudinaryId) {
        book.coverUrl = null;
      } else {
        book.coverUrl = getFileUrl(book.cloudinaryId);
      }
    });
    res.status(200).json({
      success: true,
      message: "Books retrieved Successfully",
      data: books,
    });
  } catch (error) {
    logger.error({ error: error.message }, "Failed to retrieve books");
    res.status(500).json({
      success: false,
      message: "an error accurred while retrieving books",
      error: error.message,
    });
  }
};

export const getBookById = async (req, res) => {
  try {
    // dapatkan ID buku yang akan diupdate  dari param URL
    // Selanjutnya mengubah tipe datanya menjadi integer menggunakan parseInt
    const id = parseInt(req.params.id);
    //fungsi untuk mengambil buku denga ID yang sesuai dari database
    const book = await prisma.books.findUnique({
      where: {
        id: id,
      },
    });
    //pengkondisian ketika buku ditemukan atau tidak
    if (!book) {
      return res.status(404).json({
        success: false,
        message: `Book with ID: ${id} not found`,
      });
    }

    if (book.cloudinaryId) {
      book.coverUrl = getFileUrl(book.cloudinaryId);
    } else {
      book.coverUrl = null;
    }

    res.status(200).json({
      success: true,
      message: `Book with ID: ${id} found`,
      data: book,
    });
  } catch (error) {
    // Tambahkan logger
    logger.error({ error: error.message }, "Failed to retrieve book");
    res.status(500).json({
      success: false,
      message: "An error occurred while retrieving book",
      error: error.message,
    });
  }
};

// challenge menambahkan books status stok masih tersedia atau tidak.
// controller get book status
export const getBookStatus = async (req, res) => {
  try {
    const bookId = parseInt(req.params.id);
    //Ambil data stok buku
    const book = await prisma.books.findUnique({
      where: {
        id: bookId,
      },
      select: {
        title: true,
        stock: true,
      },
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: `Book with ID ${bookId} not found`,
      });
    }
    // hitung berapa jumlah buku yang sedang dipinjam saat ini dan belum di kembalikan
    const activeBorrowings = await prisma.borrowings.findMany({
      where: {
        bookId: bookId,
        returned_at: null,
      },
      select: {
        borrow_date: true,
      },
      orderBy: {
        borrow_date: "asc",
      },
    });

    const totalCopies = book.stock;
    const borrowedCopies = activeBorrowings.length;
    const availableCopies = Math.max(0, totalCopies - borrowedCopies);

    //Mem=nentukan status badge buku
    let status = "Available";
    let nextAvailableDate = null;

    if (availableCopies === 0) {
      status = "all-borrowed";
      // Jika semua dipinjam, ambil dueDate terdekat dari antrean pertama
      if (activeBorrowings.length > 0) {
        const earliestBorrow = activeBorrowings[0].borrow_date;

        const estimatedReturn = new Date(earliestBorrow);
        estimatedReturn.setDate(estimatedReturn.getDate() + 7);

        nextAvailableDate = estimatedReturn;
      }
    } else if (availableCopies <= 2) {
      // Kamu bisa sesuaikan batas "low-stock" ini (misal sisa <= 2)
      status = "low-stock";
    }

    // 4. Return Response JSON
    return res.status(200).json({
      success: true,
      bookId: bookId,
      title: book.title,
      badge: {
        status: status, // available, low-stock, atau all-borrowed
        totalCopies: totalCopies,
        availableCopies: availableCopies,
        borrowedCopies: borrowedCopies,
        nextAvailableDate: nextAvailableDate
          ? nextAvailableDate.toISOString().split("T")[0] // Format YYYY-MM-DD
          : null,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "An error occurred while calculating book status",
      error: error.message,
    });
  }
};

// Controller untuk menambahkan buku ke dalam database
export const createBook = async (req, res) => {
  try {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      // Tambahkan logger
      logger.warn({ errors: validationErrors.array() }, "Validation failed");
      return res.status(400).json({
        success: false,
        message: "validation error",
        errors: validationErrors.array(),
      });
    }
    // mendapatkan data buku baru dengan merequest ke body
    const { categoryId, title, author, year, stock } = req.body;
    ///memastikan category id adalah number
    const parseCategoryId = Number(categoryId);

    //menambahkan data buku baru ke database
    const categoryExists = await prisma.categories.findUnique({
      where: {
        id: parseCategoryId,
      },
    });

    if (!categoryExists) {
      // Tambahkan logger
      logger.warn({ categoryId }, "Category not found");
      return res.status(404).json({
        success: false,
        message: `Category with ID: ${categoryId} not found`,
      });
    }
    // Menambahkan uplaod file di buku.
    const cover = req.file;
    let cloudinaryId = null;

    if (cover) {
      // Tambahkan logger
      logger.debug(
        { fileName: cover.filename },
        "Uploading cover to Cloudinary",
      );
      const result = await uploadFile(cover);
      cloudinaryId = result.public_id;
      // Tambahkan logger
      logger.info({ cloudinaryId }, "Cover uploaded successfully");
    }
    // Tambahkan logger
    logger.debug(
      { title, author, year, stock, categoryId },
      "Creating book in database",
    );
    const newBook = await prisma.books.create({
      data: {
        categoryId: parseCategoryId,
        title,
        author,
        year: Number(year),
        stock: Number(stock),
        cloudinaryId,
      },
    });

    // Tambahkan logger
    logger.info({ bookId: newBook.id, title }, "Book created successfully");
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: newBook,
    });
  } catch (error) {
    // Tambahkan logger
    logger.error({ error: error.message }, "Failed to create book");
    res.status(500).json({
      success: false,
      message: "An error occurred while creating book",
      error: error.message,
    });
  }
};

// Controller untuk mengupdate buku ke dalam database
export const updateBook = async (req, res) => {
  try {
    // dapatkan ID buku yang akan diupdate  dari param URL
    // Selanjutnya mengubah tipe datanya menjadi integer menggunakan parseInt
    const id = parseInt(req.params.id);

    //validasi id buku.
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty()) {
      logger.warn(
        { bookId: id, errors: validationErrors.array() },
        "Validation failed",
      );
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: validationErrors.array(),
      });
    }

    // Tambahkan logger
    logger.debug({ bookId: id }, "Finding book in database");
    // Mencari data buku dengan ID yang sesuai dengan database
    const book = await prisma.books.findUnique({
      where: {
        id: id,
      },
    });

    //pengkondisian ketika buku ditemukan atau tidak
    if (!book) {
      // Tambahkan logger
      logger.warn({ bookId: id }, "Book not found");
      return res.status(404).json({
        success: false,
        message: `Book with ID: ${id} not found`,
      });
    }

    // Tambahkan logger
    logger.debug({ bookId: id, body: req.body }, "updateBook: Started");
    const { categoryId, title, author, year, stock } = req.body;

    if (categoryId) {
      // Tambahkan logger
      logger.debug({ categoryId }, "Checking if category exists");
      const categoryExists = await isCategoryExist(categoryId);
      if (!categoryExists) {
        // Tambahkan logger
        logger.warn({ bookId: id, categoryId }, "Category not found");
        return res.status(404).json({
          success: false,
          message: `Category with ID: ${categoryId} not found`,
        });
      }
    }

    //handle upload cover
    const cover = req.file;
    let cloudinaryId = book.cloudinaryId;
    // Jika ada file cover yang diunggah, unggah ke Cloudinary dan dapatkan public_id-nya
    // Pengkondisian dibawah Jika buku sudah memiliki cover sebelumnya,
    // hapus file cover lama dari Cloudinary menggunakan public_id yang disimpan di database
    if (cover) {
      if (book.cloudinaryId) {
        // Tambahkan logger
        logger.debug(
          { bookId: id, oldCloudinaryId: book.cloudinaryId },
          "Deleting old cover",
        );
        const deleted = await deleteFile(book.cloudinaryId);
      }
      // Tambahkan logger
      logger.debug(
        { bookId: id, fileName: cover.filename },
        "Uploading new cover to Cloudinary",
      );

      const result = await uploadFile(cover);
      cloudinaryId = result.public_id;
      // Tambahkan logger
      logger.info({ bookId: id, cloudinaryId }, "Cover uploaded successfully");
    }

    // Tambahkan logger
    logger.debug(
      { bookId: id, updates: { title, author, year, categoryId } },
      "Updating book",
    );

    // Update buku dengan ID yang dimasukan menggunakan Prisma Client
    const updatedBook = await prisma.books.update({
      where: {
        id: id,
      },
      data: {
        categoryId: categoryId ? Number(categoryId) : book.categoryId,
        title: title || book.title,
        author: author || book.author,
        year: year ? Number(year) : book.year,
        stock: stock ? Number(stock) : book.stock,
        cloudinaryId,
      },
    });

    // Tambahkan logger
    logger.info({ bookId: id, title }, "Book updated successfully");
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updateBook,
    });
  } catch (error) {
    //Tambahkan logger
    logger.error(
      { bookId: req.params.id, error: error.message },
      "Failed to update book",
    );
    res.status(500).json({
      success: false,
      message: "An error occurred while updating book",
      error: error.message,
    });
  }
};

export const deleteBook = async (req, res) => {
  try {
    // dapatkan ID buku yang akan diupdate  dari param URL
    // Selanjutnya mengubah tipe datanya menjadi integer menggunakan parseInt
    const id = parseInt(req.params.id);

    // Tambahkan logger Debug
    logger.debug({ bookId: id }, "deleteBook: Started");

    // Tambahkan logger Debug
    logger.debug({ bookId: id }, "Finding book in database");

    // Gunakan Prisma Clienet untuk mencari buku dengan ID yang sesuai di database
    const book = await prisma.books.findUnique({
      where: {
        id: id,
      },
    });
    //pengkondisian ketika buku tidak ditemukan kirimkan pesan error
    if (!book) {
      // Tambahkan logger
      logger.warn({ bookId: id }, "Book not found");
      return res.status(404).json({
        success: false,
        message: `Book with ID: ${id} not found`,
      });
    }
    // Jika buku memiliki cover yang diunggah ke Cloudinary,
    // hapus file cover tersebut dari Cloudinary menggunakan public_id yang disimpan di database

    if (book.cloudinaryId) {
      // Tambahkan logger
      logger.debug(
        { bookId: id, cloudinaryId: book.cloudinaryId },
        "Deleting cover from Cloudinary",
      );
      const deleted = await deleteFile(book.cloudinaryId);
    }

    // Tambahkan logger
    logger.debug({ bookId: id }, "Deleting book from database");
    // Menghapus data buku dari database sesuai dengan ID buku menggunakan prisma client
    await prisma.books.delete({
      where: {
        id: id,
      },
    });
    // Tambahkan logger
    logger.info({ bookId: id }, "Book deleted successfully");
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
    });
  } catch (error) {
    logger.error(
      { bookId: req.params.id, error: error.message },
      "Failed to delete book",
    );
    res.status(500).json({
      success: false,
      message: "An error occurred while deleting book",
      error: error.message,
    });
  }
};

//controller ini nantinya disambungkan dengan controller borrowing pada saat peminjaman atau pengembalian.
export const isBookExist = async (id) => {
  // Mencari buku dengan ID yang sesuai di database menggunakan Prisma Client
  const book = await prisma.books.findUnique({
    where: {
      id: id,
    },
  });
  return !!book;
};
