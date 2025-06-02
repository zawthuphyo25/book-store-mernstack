const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const handleErrorMessages = require("../middlewares/handleErrorMessages");

const BookController = require("../controllers/BookController");

router.get("", BookController.index);
router.get("/:id", BookController.show);
router.post(
  "",
  [
    body("title").notEmpty(),
    body("author").notEmpty(),
    body("price").isNumeric(),
  ],
  handleErrorMessages,
  BookController.store
);
router.patch("/:id", BookController.update);
router.delete("/:id", BookController.delete);

module.exports = router;
