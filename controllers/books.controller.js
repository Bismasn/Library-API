import prisma from "../database.config.js";
import { validationResult } from "express-validator";

export const getBooks = async (req, res) => {
  //menggunakan prisma client untuk mengambil semua data buku dari database
  const books = await prisma.books.findMany();
  res.status(200).json({
    success: true,
    message: "Books retrieved Successfully",
    data: books,
  });
};

export const getBookById = async (req, res) => {
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
  res.status(200).json({
    success: true,
    message: `Book with ID: ${id} not found`,
    data: book,
  });
};

export const createBook = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "validation error",
      errors: validationErrors.array(),
    });
  }
  // mendapatkan data buku baru dengan merequest ke body
  const { categoryId, title, author, year } = req.body;
  //menambahkan data buku baru ke database
  const categoryExists = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });

  if (!categoryExists) {
    return res.status(404).json({
      success: false,
      message: `Category with ID: ${categoryId} not found`,
    });
  }
  const book = await prisma.books.create({
    data: {
      categoryId,
      title,
      author,
      year,
    },
  });
  res.status(200).json({
    success: true,
    message: "Book created successfully",
    data: book,
  });
};

export const updateBook = async (req, res) => {
  const validationErrors = validationResult(req);

  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation error",
      errors: validationErrors.array(),
    });
  }
  // dapatkan ID buku yang akan diupdate  dari param URL
  // Selanjutnya mengubah tipe datanya menjadi integer menggunakan parseInt
  const id = parseInt(req.params.id);

  const { categoryId, title, author, year } = req.body;

  // Mencari data buku dengan ID yang sesuai dengan database
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

  // Mengecek apakah kategori dengan ID yang diberikan ada di database menggunakan fungsi isCategoryExist
  const categoryExists = await prisma.categories.findUnique({
    where: {
      id: id,
    },
  });

  if (!categoryExists) {
    return res.status(404).json({
      success: false,
      message: `Category with ID: ${categoryId} not found`,
    });
  }

  // Update buku dengan ID yang dimasukan menggunakan Prisma Client
  await prisma.books.update({
    where: {
      id: id,
    },
    data: {
      categoryId,
      title,
      author,
      year,
    },
  });

  res.status(200).json({
    success: true,
    message: "Book updated successfully",
    data: book,
  });
};

export const deleteBook = async (req, res) => {
  // dapatkan ID buku yang akan diupdate  dari param URL
  // Selanjutnya mengubah tipe datanya menjadi integer menggunakan parseInt
  const id = parseInt(req.params.id);

  // Gunakan Prisma Clienet untuk mencari buku dengan ID yang sesuai di database
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

  // Menghapus data buku dari database sesuai dengan ID buku menggunakan prisma client
  await prisma.books.delete({
    where: {
      id: id,
    },
  });
  res.status(200).json({
    success: true,
    message: "Book deleted successfully",
  });
};

export const isBookExist = async (id) => {
  // Mencari buku dengan ID yang sesuai di database menggunakan Prisma Client
  const book = await prisma.books.findUnique({
    where: {
      id: id,
    },
  });

  return !!book;
};
