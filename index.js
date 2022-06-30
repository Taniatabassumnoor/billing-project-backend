const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// const authRouter = require("./routerHandler/authHandler");
const userHandler = require("./routerHandler/userHandler");
const billingHandler = require("./routerHandler/billingHandler");
// const userRouter = require("./routers/user");

// const productsRouter = require("./routers/product");
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
// database connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_custer);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB not Connected");
  }
};
connectDB();
// route handling
app.get("/test", (req, res) => {
  res.send("Hello from Billing Project");
});
// app.use("/api/users", userRouter);
app.use("/api", userHandler);
app.use("/api", billingHandler);

// app.use("/api/products", productsRouter);

// server listen
app.listen(5000, () => {
  console.log("app is running");
});
