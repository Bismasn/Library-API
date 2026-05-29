import prisma from "../config/database.config.js";
import logger from "../config/logger.config.js";

// CONTROLLER: Get All Reviews by Book ID (GET)
export const getBookReviews = async (req, res) => {
  //mengambil id buku dari URL
  const bookId = req.params.id;
  try {
    //Validasi buku tersebut benar benar ada di database
    const bookExists = await prisma.books.findUnique({
      where: { id: Number(bookId) },
    });

    if (!bookExists) {
      return res.status(404).json({ error: "Book not found" });
    }

    logger.debug({ params: req.params }, "Get all reviews in database");
    //Mengambil semua data review terkali degan bookID
    const reviews = await prisma.review.findMany({
      where: { bookId: Number(bookId) },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      //mengurutkan data dari terbaru ke terlama
      orderBy: {
        createdAt: "desc",
      },
    });

    //respons sukses ketika berhasil memuat
    return res.status(200).json({
      message: `Reviews for book ID ${bookId} fetched successfully`,
      data: reviews,
    });
  } catch (error) {
    logger.error({ error: error.message }, "getBookReviews: Error encountered");
    return res.status(500).json({ error: "Internal server error" });
  }
};

// CONTROLLER: Submit Review (POST)
export const createReview = async (req, res) => {
  try {
    logger.debug({ body: req.body }, "createReview: Started");

    const { rating, comment, bookId } = req.body;
    // Ambil userId dari middleware authenticateToken
    const userId = req.user.id;
    logger.debug({ body: req.body, userId }, "creating Review in database");
    // Pastikan buku tersedia sebelum membuat review
    const bookExists = await prisma.books.findUnique({
      where: { id: Number(bookId) },
    });

    if (!bookExists) {
      return res.status(404).json({ error: "Book not found" });
    }

    // Simpan ke DB menggunakan Prisma
    const newReview = await prisma.review.create({
      data: {
        rating: rating,
        comment: comment,
        userId: Number(userId),
        bookId: Number(bookId),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(201).json({
      message: "Review submitted successfully",
      data: newReview,
    });
  } catch (error) {
    logger.error({ error: error.message }, "createReview: Error encountered");
    return res.status(500).json({ error: "Internal server error" });
  }
};
