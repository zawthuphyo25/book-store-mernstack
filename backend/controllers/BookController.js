const Book = require("../models/Book");

const BookController = {
  index: async (req, res) => {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  },
  show: async (req, res) => {
    try {
      const id = req.params.id;
      if (!id) {
        return res.status(400).json({ msg: "Book id is valid" });
      }
      const book = await Book.findById(id);
      if (!book) {
        return res.status(404).json({ msg: "Book not found" });
      }
      res.json(book);
    } catch (error) {
      res.status(500).json({ msg: "Failed to fetch book" });
    }
  },
  store: async (req, res) => {
    try {
      const { title, author, price } = req.body;
      const book = await Book.create({
        title,
        author,
        price,
      });
      res.json(book);
    } catch (error) {
      res.status(500).json({ msg: "Failed to create book" });
    }
  },
  update: (req, res) => {
    res.json({ msg: "book updated" });
  },
  delete: (req, res) => {
    res.json({ msg: "book deleted" });
  },
};

module.exports = BookController;
