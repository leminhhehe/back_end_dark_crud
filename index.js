const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.models.js");
const productRoute = require("./routes/product.route");
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/product', productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Service");
});



// Kết nối tới MongoDB trước khi khởi động server
mongoose
  .connect(
    "mongodb+srv://buileminh2405:LCVPeSBBHALCvW7n@backenddb.4d94imd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB",
    {}
  )
  .then(() => {
    console.log("Connected to Database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log("Connection to Database Failed", error);
  });






