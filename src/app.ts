import express from "express";
import { connectDB } from "./config/db";
import bookRouter from "./routes/bookroutre";
import loanRouter from "./routes/loanroutre";
import userRouter from "./routes/userrouter";

const app = express();

connectDB();
app.use(express.json());

app.use(`/api/v1/user`, userRouter);
app.use(`/api/v1/book`, bookRouter);
app.use(`/api/v1/loan`, loanRouter);

const PORT = process.env.port || 5001;
app.listen(PORT, () => {
  console.log("server run on port : " + PORT);
});