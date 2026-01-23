import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import BookTable from "../components/BookTable";


const Home = () => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getBooks = async () => {
            const res = await axios.get(`${API_URL}`);
            setBooks(res.data.books);
        };
        getBooks();

    }, [API_URL]);


    const deleteBook = async (id) => {

        if (confirm("Are you sure, you want to delete this ?")) {
            await axios.delete(`${API_URL}/${id}`);

            const res = await axios.get(`${API_URL}`);
            setBooks(res.data.books)
        }
    }




    return (
        <div className="m-10 flex flex-col">

            <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold">
                    Books Inventory
                </h2>

                <button
                    onClick={() => navigate("/add")}
                    className="bg-blue-500 px-4 py-2 rounded-full font-semibold text-white hover:bg-blue-600 transition"
                >
                    Add Book
                </button>
            </div>

            <BookTable books={books} onDelete={deleteBook} />


        </div >
    )
}

export default Home;