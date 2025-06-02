const express = require("express");
require("dotenv").config();
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Book Store API");
});

// Import routes
const bookRoutes = require("./routes/books");
app.use("/api/books", bookRoutes);

// Setup mongoDB connection
const mongoose = require("mongoose");

const mongoURL =
  "mongodb+srv://zawthuphyo:bookstore1234@book-store.emjqvod.mongodb.net/?retryWrites=true&w=majority&appName=Book-Store";

mongoose.connect(mongoURL).then(() => {
  console.log("MongoDB connected");

  app.listen(PORT, () => {
    console.log(`Server is running on localhost:${PORT}`);
  });
});
