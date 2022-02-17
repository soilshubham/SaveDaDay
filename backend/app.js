require('dotenv').config();
const express = require("express");
const app = express();
const port = 5000;
const cookiParser = require("cookie-parser");
const mongoose = require("mongoose");

const userRouter = require("./routes/User");

app.use(cookiParser());
app.use(express.json());
app.use('/user', userRouter)

mongoose.connect(
  process.env.MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);



app.listen(port, () => console.log(`Server started at ${port}!`));