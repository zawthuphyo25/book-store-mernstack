const BookController = {
  index: (req, res) => {
    res.json({ msg: "all books list" });
  },
  show: (req, res) => {
    res.json({ msg: "book got" });
  },
  store: (req, res) => {
    res.json({ msg: "book created" });
  },
  update: (req, res) => {
    res.json({ msg: "book updated" });
  },
  delete: (req, res) => {
    res.json({ msg: "book deleted" });
  },
};

module.exports = BookController;
