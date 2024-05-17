const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.route");
const app = express();

// Load environment variables from .env file
dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Service");
});

// Kết nối tới MongoDB trước khi khởi động server
mongoose.connect(process.env.MONGODB_URL, {
})
  .then(() => {
    console.log("Connected to Database");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection to Database Failed", error);
  });
