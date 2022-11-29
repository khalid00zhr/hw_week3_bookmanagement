import express from "express";
import { getUsers, postNewUser } from "../controlers/userControler";
import validate from "../middleware/validate";
import { addUserSchema } from "../zodSchema/zodSchema";

const router = express.Router();

router.get(`/`, getUsers);
router.post(`/`, validate(addUserSchema), postNewUser);

export default router;