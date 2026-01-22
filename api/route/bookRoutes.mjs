import express from "express";
import { addBook, deleteBook, editBook, getBook, getBooks } from "../controller/bookController.mjs";


const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.get("/:id", getBook);
router.put("/:id", editBook);
router.delete("/:id", deleteBook);

export default router;




