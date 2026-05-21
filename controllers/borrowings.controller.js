import prisma from "../database.config.js";

export const getAllBorrowings = async (req, res) => {
  //menggunakan prisma client untuk mengambil semua data buku dari database
  const borrowings = await prisma.borrowings.findMany({
    include: {
      borrower: { select: { id: true, name: true, email: true } },
      book: true,
    },
  });
  res.status(200).json({
    success: true,
    message: "borrowings retrieved Successfully",
    data: borrowings,
  });
};

export const getBorrowingById = async (req, res) => {
  // dapatkan ID buku yang akan diupdate  dari param URL
  // Selanjutnya mengubah tipe datanya menjadi integer menggunakan parseInt
  const id = parseInt(req.params.id);

  //fungsi untuk mengambil buku denga ID yang sesuai dari database
  const borrowing = await prisma.borrowings.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      borrower: { select: { id: true, name: true, email: true } },
      book: true,
    },
  });

  //pengkondisian ketika buku ditemukan atau tidak
  if (!borrowing) {
    return res.status(404).json({
      success: false,
      message: `Borrowing with ID: ${id} not found`,
    });
  }
  res.status(200).json({
    success: true,
    message: `Borrowing with ID: ${id} not found`,
    data: borrowing,
  });
};

export const createBorrowing = async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "validation error",
      errors: validationErrors.array(),
    });
  }
  // mendapatkan data buku baru dengan merequest ke body
  const { userId, bookId } = req.body;
  //menambahkan data buku baru ke database
  const userExists = await isUserExist(userId);
  if (!userExists) {
    return res.status(404).json({
      success: false,
      message: `User with ID: ${userId} not found`,
    });
  }

  const bookExists = await isBookExist(bookId);
  if (!bookExists) {
    return res.status(404).json({
      success: false,
      message: `Book with ID: ${bookId} not found`,
    });
  }

  const borrowing = await prisma.borrowings.create({
    data: {
      userId: parseInt(userId),
      bookId: parseInt(bookId),
    },
    include: {
      borrower: { select: { id: true, name: true, email: true } },
      book: true,
    },
  });

  // Update ketersediaan buku menjadi false setelah dipinjam
  await prisma.books.update({
    where: { id: parseInt(bookId) },
    data: { available: false },
  });

  res.status(200).json({
    success: true,
    message: "Borrowing created successfully",
    data: borrowing,
  });
};

export const returnBook = async (req, res) => {
  // Mendapatkan ID peminjaman yang akan dikembalikan dari parameter URL
  const { id } = req.params;

  // Mencari peminjaman dengan ID yang sesuai di database menggunakan Prisma Client
  const borrowing = await prisma.borrowings.findUnique({
    where: { id: parseInt(id) },
  });

  // Jika peminjaman tidak ditemukan, kirimkan pesan error
  if (!borrowing) {
    return res.status(404).json({
      success: false,
      message: "Borrowing not found",
    });
  }

  // Cek apakah buku sudah dikembalikan
  if (borrowing.returned_at) {
    return res.status(200).json({
      success: false,
      message: "Book already returned",
    });
  }

  // Update peminjaman dengan ID yang sesuai di database menggunakan Prisma Client
  const returnedBorrowing = await prisma.borrowings.update({
    where: { id: parseInt(id) },
    data: { returned_at: new Date() },
    include: {
      borrower: { select: { id: true, name: true, email: true } },
      book: true,
    },
  });

  // Update ketersediaan buku menjadi true setelah dikembalikan
  await prisma.books.update({
    where: { id: returnedBorrowing.bookId },
    data: { available: true },
  });

  res.status(200).json({
    success: true,
    message: "Book returned successfully",
    data: returnedBorrowing,
  });
};

export const deleteBorrowing = async (req, res) => {
  // Mendapatkan ID peminjaman yang akan dihapus dari parameter URL
  const id = parseInt(req.params.id);

  // Mencari peminjaman dengan ID yang sesuai di database menggunakan Prisma Client
  const borrowing = await prisma.borrowings.findUnique({
    where: { id: parseInt(id) },
    include: {
      borrower: { select: { id: true, name: true, email: true } },
      book: true,
    },
  });

  // Jika peminjaman tidak ditemukan, kirimkan pesan error
  if (!borrowing) {
    return res.status(404).json({
      success: false,
      message: "Borrowing not found",
    });
  }

  // Hapus peminjaman dengan ID yang sesuai di database menggunakan Prisma Client
  await prisma.borrowings.delete({ where: { id: parseInt(id) } });

  // Update ketersediaan buku menjadi true jika buku belum dikembalikan
  if (!borrowing.returned_at) {
    await prisma.books.update({
      where: { id: borrowing.bookId },
      data: { available: true },
    });
  }

  res.status(200).json({
    success: true,
    message: "Borrowing deleted successfully",
    data: borrowing,
  });
};
