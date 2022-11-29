import express from "express";
import {
  addNewLoan,
  getAllLoan,
  lendBooks,
} from "../controlers/loanControler'";
import validate from "../middleware/validate";
import { addLoanSchema } from "../zodSchema/zodSchema";

const router = express.Router();

router.get(`/`, getAllLoan);
router.get(`/user/loan/:userid`, lendBooks);
router.post(`/`, validate(addLoanSchema), addNewLoan);

export default router;