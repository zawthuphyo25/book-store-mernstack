const Book = require("../models/Book");

const BookController = {
  index: (req, res) => {
    res.json({ msg: "all books list" });
  },
  show: (req, res) => {
    res.json({ msg: "book got" });
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
