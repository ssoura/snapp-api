import express from "express";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./config/db.mjs";

import userRouter from "./routes/user-route.mjs";

//database
connectDB();

const app = express();
app.use(express.json());

app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
