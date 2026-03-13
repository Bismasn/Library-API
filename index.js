import express from "express";
import { books } from "./data.js";

const app = express();
const port = 3000;

app.get("/books", (req, res) => {
  res.send(books);
});

app.get("/books", (req, res) => {
  res.send("List of books will be here");
});

// Ini adalah route yang harus dibuat
app.get("/books/:id", (req, res) => {
  const id = parseInt(req.params.id);

  //mencari buku dengan id yang sesuai
  const book = books.find((book) => book.id === id);

  //jika buku tidak ditemukan,, kirimkan pesan error
  if (!book) {
    res.send(`Book with ID: ${id} not found`);
  }
  res.send(book);
});

//post method
app.post("/books", (req, res) => {
  res.send("Book created successfully");
});

//Put Method
app.put("/books/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Book with ID: ${id} update successfully`);
});

// Delete Method
app.delete("/books/:id", (req, res) => {
  const id = req.params.id;

  res.send(`Books with ID: ${id} deletes successfully`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
