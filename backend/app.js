require('dotenv').config();
const express = require("express");
const app = express();
const port = 5000;
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routes/User");

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});
app.use('/user', userRouter)

mongoose.connect(
  process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true },
  () => { console.log("Connected to MongoDB") }
);

app.listen(port, () => console.log(`Server started at ${port}!`));