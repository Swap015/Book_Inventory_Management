import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookForm = ({ initialData = {}, onSubmit, buttonText }) => {


    const [book, setBook] = useState({
        title: initialData.title || "",
        author: initialData.author || "",
        publisher: initialData.publisher || "",
        publishedDate: initialData.publishedDate || "",
        price: initialData.price || "",
        overview: initialData.overview || "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!book.title || !book.author || !book.publisher || !book.price) {
            alert("Please fill all required fields");
            return;
        }

        if (isNaN(book.price)) {
            alert("Price must be a number");
            return;
        }

        onSubmit(book);
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4 flex flex-col justify-center items-center"
        >
            <h2 className="text-2xl font-semibold text-center">{buttonText}</h2>

            <input
                type="text"
                name="title"
                placeholder="Title *"
                value={book.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <input
                type="text"
                name="author"
                placeholder="Author *"
                value={book.author}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <input
                type="text"
                name="publisher"
                placeholder="Publisher *"
                value={book.publisher}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <input
                type="date"
                name="publishedDate"
                value={book.publishedDate}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <input
                type="text"
                name="price"
                placeholder="Price *"
                value={book.price}
                onChange={handleChange}
                className="w-full border p-2 rounded"
            />

            <textarea
                name="overview"
                placeholder="Overview"
                value={book.overview}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                rows="4"
            />

            <div className="mt-6 flex gap-4">

                <button type="button"
                    onClick={() => navigate(-1)}
                    className="bg-gray-400 text-black font-bold px-4 py-2 rounded hover:bg-gray-500"
                >
                    Back
                </button>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700"
                >
                    {buttonText}
                </button>

            </div>

        </form>
    );
};

export default BookForm;
