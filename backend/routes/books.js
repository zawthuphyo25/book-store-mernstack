const express = require("express");
const router = express.Router();

const BookController = require("../controllers/BookController");

router.get("", BookController.index);
router.get("/:id", BookController.show);
router.post("", BookController.store);
router.patch("/:id", BookController.update);
router.delete("/:id", BookController.delete);

module.exports = router;
