# Library-API
Project ini membuat library API untuk memanajemen data dari buku-buku yang ada di perpustakaan.
Dengan menggunkan Express.js dan Prisma ORM.

## ✨ Fitur Utama

* **Autentikasi** - JWT-based authentication
* **Manajemen Pengguna** - User registration, profiles, dan roles
* **Manajemen Buku** - CRUD operations untuk katalog buku
* **Reivew Buku** - User bisa mereview buku
* **Kategori Buku** - Organisasi buku berdasarkan kategori
* **Peminjaman** - Tracking peminjaman dan pengembalian buku
* **Cloud Storage** - Integrasi Cloudinary untuk upload gambar

## 📋 Prerequisites

* Node.js 18+
* PostgreSQL 12+
* npm

## 🛠️ Setup Lokal

### 1. Clone & Install Dependencies

```bash
npm install
```

### 2. Required Environment Variables:
```properties
ENV=development
PORT=3000

JWT_SECRET=your_secret_key
BCRYPT_SALT_ROUNDS=10

DATABASE_URL=your_database_url
DIRECT_URL=your_direct_db_url

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

LOG_LEVEL=debug
```

### 3. Database Migration
```bash
npx prisma migrate dev
```

### 4. Generate Prisma Client
```bash
npx prisma generate
```

### 5. Run Development Server
```bash
npm run dev
```
Saat dijalankan sever akan berjalan di ```http://localhost:3000```

## 📁 Struktur Project
```bash
├── routes/          # Route definitions
├── controllers/     # Business logic
├── middlewares/     # Custom middlewares
├── validations/     # Input validations
├── config/         # Configuration files
├── prisma/          # Database schema & migrations
├── generated/       # Generated Prisma client
└── index.js         # Entry point
```
## 🔌 API Routes

### Authentication
* POST /auth/register - Register pengguna baru
* POST /auth/login - Login

### Books
* GET /books - List semua buku
* GET /books/:id - Get detail buku
* POST /books/create - Tambah buku baru (Auth required, Admin only)
* PUT /books/:id - Update buku (Auth required, Admin only)
* DELETE /books/:id - Hapus buku (Auth required, Admin only)

### Categories
* GET /categories - List semua kategori
* GET /categories/:id - Get detail kategori
* GET /categories/:id/books - Get buku berdasarkan kategori
* POST /categories/create - Tambah kategori baru (Auth required, Admin only)
* PUT /categories/:id - Update kategori (Auth required, Admin only)
* DELETE /categories/:id - Hapus kategori (Auth required, Admin only)

### Users
* GET /users - List semua pengguna (Auth required)
* GET /users/:id - Get detail pengguna (Auth required)
* GET /users/:id/profile - Get profil pengguna (Auth required)
* POST /users/create - Tambah pengguna baru (Auth required)
* PUT /users/:id - Update pengguna (Auth required)
* DELETE /users/:id - Hapus pengguna (Auth required)

### Reviews
* GET /reivews/:id - Get semua review buku tersebut (Auth required)
* POST /reviews/create - Buat review buku baru

### Profiles
* GET /profiles - List semua profil (Auth required)
* GET /profiles/:id - Get detail profil (Auth required)
* POST /profiles/create - Buat profil baru (Auth required)
* PUT /profiles/:id - Update profil (Auth required)
* DELETE /profiles/:id - Hapus profil (Auth required)

### Borrowings
* GET /borrowings - List semua peminjaman (Auth required)
* GET /borrowings/:id - Get detail peminjaman (Auth required)
* POST /borrowings/create - Buat peminjaman baru (Auth required)
* PUT /borrowings/:id/return - Kembalikan buku (Auth required)
* DELETE /borrowings/:id - Hapus peminjaman (Auth required)

## 📦 Dependencies Utama
* express - Web framework
* @prisma/client - ORM
* jsonwebtoken - JWT authentication
* bcryptjs - Password hashing
* cloudinary - Image storage
* express-validator - Input validation
* pino - Logger

## 🙍Author
* Bisma Semara Nadi
