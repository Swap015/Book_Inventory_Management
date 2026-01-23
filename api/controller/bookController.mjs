
import Books from "../model/bookModel.js";


export const addBook = async (req, res) => {

    try {
        const { title, author, publisher, publishedDate, price, overview } = req.body;

        if (!title || !author || !publisher || !price) {
            return res.status(400).json({ msg: "All the fields are required" });
        }

        const newBook = await Books.create({
            title,
            author,
            publisher,
            publishedDate,
            price,
            overview
        });

        res.status(201).json({
            msg: "Added a book",
            data: newBook
        });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const editBook = async (req, res) => {

    try {
        const updatedBook = await Books.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({
            msg: "Book Updated",
            data: updatedBook
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getBook = async (req, res) => {

    try {
        const book = await Books.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({
            msg: "Fetched book",
            data: book
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getBooks = async (req, res) => {
    try {

        const books = await Books.find().sort({ createdAt: -1 });
        res.status(200).json({
            msg: "Fetched all books",
             books
        })
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

export const deleteBook = async (req, res) => {

    try {
        const book = await Books.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json({ message: "Book deleted successfully" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

