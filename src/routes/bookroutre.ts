import express from "express";
import { addNewBook, getAllBooks } from "../controlers/bookControler";
import validate from "../middleware/validate";
import { addBooksSchema } from "../zodSchema/zodSchema";

const routes = express.Router();

routes.get(`/`, getAllBooks);
routes.post(`/`, validate(addBooksSchema), addNewBook);

export default routes;