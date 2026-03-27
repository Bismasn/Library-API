import express from "express";
import prisma from "./database.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/books", async (req, res) => {
  //menggunakan prisma client untuk mengambil semua data buku dari database
  const books = await prisma.books.findMany();
  res.json({
    success: true,
    message: "Books retrieved Successfully",
    data: books,
  });
});

app.get("/books/:id", async (req, res) => {
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
app.post("/books", async (req, res) => {
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
app.put("/books/:id", async (req, res) => {
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
app.delete("/books/:id", async (req, res) => {
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

//get user
app.get('/users', (req, res) => {
    res.send(users)
})

app.get('/users/:id',(req, res) => {

    //merubah tipe data menjadi integer menggunakan parseInt
    const id = parseInt(req.params.id)
    //mencari user dengan Id yang sesuai
    const user = users.find((user) => user.id === id)
    //jika id user tidak ditemukan
    if (!user) {
        res.send(`User with ID: ${id} not found !`)
    }

    res.send(user)
})

// POST User
app.post('/users', (req, res) => {
    
    const {name, email, role } = req.body

    const newId = users.length + 1

    const newUser = { id: newId, name, email, role}

    users.push(newUser)

    res.send('User created successfully')
 })
  
// PUT User
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const {name, email, role } = req.body

    const userIndex = users.findIndex((user) => user.id === id)
    
    if (userIndex === -1) {
        res.send(`User with ID: ${id} not found`)
        return
      }

      users[userIndex] = {
        id: users[userIndex].id,
        name,
        email,
        role,
    }

    res.send(`User with ID: ${id} updated successfully`)
})
  
// DELETE User
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const userIndex = users.findIndex((user) => user.id === id)

    if (userIndex === -1) {
        res.send(`User with ID: ${id} not found`)
        return
      }

      users.splice(userIndex, 1)
    
    res.send(`User with ID: ${id} deleted successfully`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
// Middleware untuk parsing JSON pada request body

// // Ini adalah route yang harus dibuat
// app.get("/books/:id", (req, res) => {
//   const id = parseInt(req.params.id);

//   //mencari buku dengan id yang sesuai
//   const book = books.find((book) => book.id === id);

//   //jika buku tidak ditemukan,, kirimkan pesan error
//   if (!book) {
//     res.send(`Book with ID: ${id} not found`);
//   }
//   res.send(book);
// });
