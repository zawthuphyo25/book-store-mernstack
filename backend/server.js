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

app.listen(PORT, () => {
  console.log(`Server is running on localhost:${PORT}`);
});
