import express from "express";
import connect from "./db.js";
import createUserRouter from "./Routes/CreateUser.js";
import dotenv from "dotenv";
// import cors from "cors";
dotenv.config();

const app = express();

// app.use(
//   cors({
//     origin: ["https://bizarre-coders-official.vercel.app/"],
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );

// const port = process.env.PORT;
const port = 5000;

connect();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json());
app.use("/api/", createUserRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`✅ Server Connected ${port}`);
});
