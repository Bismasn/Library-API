import express from "express";
import prisma from "../database.js";

const router = express.Router();

router.get("/books", async (req, res) => {
  //menggunakan prisma client untuk mengambil semua data buku dari database
  const books = await prisma.books.findMany();
  res.json({
    success: true,
    message: "Books retrieved Successfully",
    data: books,
  });
});

router.get("/books/:id", async (req, res) => {
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
    return res.json({
      success: false,
      message: `Book with ID: ${id} not found`,
    });
  }
  res.json({
    success: true,
    message: `Book with ID: ${id} not found`,
    data: book,
  });
});

//post method
router.post("/books", async (req, res) => {
  // mendapatkan data buku baru dengan merequest ke body
  const { title, author, year } = req.body;
  //menambahkan data buku baru ke database
  const book = await prisma.books.create({
    data: {
      title,
      author,
      year,
    },
  });
  res.json({
    success: true,
    message: "Book created successfully",
    data: book,
  });
});

//Put Method
router.put("/books/:id", async (req, res) => {
  // dapatkan ID buku yang akan diupdate  dari param URL
  // Selanjutnya mengubah tipe datanya menjadi integer menggunakan parseInt
  const id = parseInt(req.params.id);

  // Mencari data buku dengan ID yang sesuai dengan database
  const book = await prisma.books.findUnique({
    where: {
      id: id,
    },
  });
  //pengkondisian ketika buku ditemukan atau tidak
  if (!book) {
    return res.json({
      success: false,
      message: `Book with ID: ${id} not found`,
    });
  }

  // Update buku dengan ID yang dimasukan menggunakan Prisma Client
  await prisma.books.update({
    where: {
      id: id,
    },
    data: {
      title,
      author,
      year,
    },
  });

  res.json({
    success: true,
    message: "Book updated successfully",
    data: book,
  });
});

// Delete Method
router.delete("/books/:id", async (req, res) => {
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
    return res.json({
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
  res.json({
    success: true,
    message: "Book deleted successfully",
  });
});

export default router;
