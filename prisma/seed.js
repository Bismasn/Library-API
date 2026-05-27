import prisma from "../config/database.config";

async function main() {
  console.log("Memulai pembersihan database...");

  // Hapus data dengan urutan yang benar (tabel anak dulu, baru tabel induk)
  await prisma.borrowings.deleteMany();
  await prisma.profiles.deleteMany();
  await prisma.books.deleteMany();
  await prisma.categories.deleteMany();
  await prisma.users.deleteMany();

  console.log("Database bersih. Memasukkan data seeder...");

  // 1. Seed Categories (5-10 kategori)
  const categoriesData = [
    { name: "Teknologi" },
    { name: "Sains" },
    { name: "Fiksi" },
    { name: "Sejarah" },
    { name: "Bisnis" },
    { name: "Pengembangan Diri" },
  ];

  await prisma.categories.createMany({ data: categoriesData });
  const allCategories = await prisma.categories.findMany();

  // 2. Seed Users (20 user)
  const users = [];
  for (let i = 1; i <= 20; i++) {
    const user = await prisma.users.create({
      data: {
        name: `User Ke-${i}`,
        email: `user${i}@example.com`,
        password: "password123", // Dalam produksi, pastikan di-hash
        role: i === 1 ? "ADMIN" : "USER",
        profiles: {
          create: {
            address: `Jl. Contoh No. ${i}, Kota Denpasar`,
            phone: `0812345678${i.toString().padStart(2, "0")}`,
          },
        },
      },
    });
    users.push(user);
  }

  // 3. Seed Books (25 buku)
  const books = [];
  const bookTitles = [
    "Clean Code",
    "Refactoring",
    "The Pragmatic Programmer",
    "Atomic Habits",
    "Sapiens",
    "Deep Work",
    "Designing Data-Intensive Applications",
    "Eloquent JavaScript",
    "Introduction to Algorithms",
    "The Lean Startup",
    "Rich Dad Poor Dad",
    "Zero to One",
    "The Phoenix Project",
    "Building Microservices",
    "The Art of War",
    "Dune",
    "The Great Gatsby",
    "Thinking, Fast and Slow",
    "Man's Search for Meaning",
    "Start with Why",
    "Grokking Algorithms",
    "Head First Design Patterns",
    "Clean Architecture",
    "Mythical Man-Month",
    "Code Complete",
  ];

  for (let i = 0; i < bookTitles.length; i++) {
    const book = await prisma.books.create({
      data: {
        title: bookTitles[i],
        author: `Author ${String.fromCharCode(65 + (i % 26))}`,
        year: 2010 + (i % 14),
        categoryId: allCategories[i % allCategories.length].id,
        available: i % 5 !== 0, // Buat beberapa buku tidak tersedia
      },
    });
    books.push(book);
  }

  // 4. Seed Borrowings (20 transaksi peminjaman)
  for (let i = 0; i < 20; i++) {
    const randomUser = users[Math.floor(Math.random() * users.length)];
    const randomBook = books[Math.floor(Math.random() * books.length)];

    await prisma.borrowings.create({
      data: {
        userId: randomUser.id,
        bookId: randomBook.id,
        borrow_date: new Date(2026, 3, i + 1), // April 2026
        returned_at: i % 3 === 0 ? new Date(2026, 3, i + 5) : null, // Ada yang sudah kembali, ada yang belum
      },
    });
  }

  console.log("Seeding selesai dengan sukses!");
}

main()
  .catch((e) => {
    console.error("Terjadi kesalahan saat seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
