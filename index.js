import express from "express";
// import prisma from "./database.js";
import router from "./routes/index.route.js";

const app = express();
const port = 3000;

// Middleware untuk parsing JSON pada request body
app.use(express.json());
app.use(router);

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
