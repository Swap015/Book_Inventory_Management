import axios from "axios";
import { useNavigate } from "react-router-dom";
import BookForm from "../components/BookForm";

const AddBook = () => {
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    const addBook = async (bookData) => {
        try {
            await axios.post(API_URL, bookData);
            alert("Book added successfully");
            navigate("/");
        } catch (err) {
            alert(err.response?.data?.msg || "Something went wrong");
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 py-10">
            <BookForm
                onSubmit={addBook}
                buttonText="Add Book"
            />
        </div>
    );
};

export default AddBook;
