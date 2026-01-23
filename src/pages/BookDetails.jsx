import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BookDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const API_URL = import.meta.env.VITE_API_URL;
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const res = await axios.get(`${API_URL}/${id}`);
                setBook(res.data.books);
            } catch {
                alert("Failed to fetch book details");
            }
        };

        fetchBook();
    }, [id, API_URL]);

    if (!book) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10 px-4">
            <div className="max-w-xl mx-auto bg-white p-3 rounded shadow flex flex-col justify-center items-center">

                <h2 className="text-3xl font-bold mb-4">{book.title}</h2>

                <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Author:</span> {book.author}</p>
                    <p><span className="font-semibold">Publisher:</span> {book.publisher}</p>
                    <p><span className="font-semibold">Published Date:</span> {book.publishedDate || "N/A"}</p>
                    <p><span className="font-semibold">Price:</span> ₹{book.price}</p>
                </div>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Overview</h3>
                    <p className="text-gray-600">
                        {book.overview || "No overview available"}
                    </p>
                </div>

                <div className="mt-6 flex gap-4">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-gray-400 text-black font-bold px-4 py-2 rounded hover:bg-gray-500"
                    >
                        Back
                    </button>

                    <button
                        onClick={() => navigate(`/edit/${book._id}`)}
                        className="bg-blue-400 text-black font-bold px-4 py-2 rounded hover:bg-blue-500"
                    >
                        Edit Book
                    </button>
                </div>

            </div>
        </div>
    );
};

export default BookDetails;
