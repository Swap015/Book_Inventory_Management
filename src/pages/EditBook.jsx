import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";

const EditBook = () => {
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
                alert("Failed to load book");
            }
        };

        fetchBook();

    }, [id, API_URL]);

    const handleUpdateBook = async (updatedData) => {

        try {

            await axios.put(`${API_URL}/${id}`, updatedData);
            alert("Book updated successfully");
            navigate("/");
        } catch (err) {
            alert(err.response?.data?.msg || "Update failed");
        }
    };

    if (!book) {
        return <p className="text-center mt-10">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-gray-100 py-10">

            <BookForm
                initialData={book}
                onSubmit={handleUpdateBook}
                buttonText="Update Book Details"
            />

        </div>
    );
};

export default EditBook;
