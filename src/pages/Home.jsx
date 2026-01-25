import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import BookTable from "../components/BookTable";


const Home = () => {

    const API_URL = import.meta.env.VITE_API_URL;

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        const getBooks = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`${API_URL}`);
                setBooks(res.data.books);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
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
        <div className="m-4 sm:m-6 lg:m-10 p-4 sm:p-6 lg:p-10 flex flex-col lg:gap-6">

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">
                    Books Inventory
                </h2>

                <button
                    onClick={() => navigate("/add-Book")}
                    className="bg-emerald-600 px-5 py-2 rounded-full font-semibold text-white hover:bg-emerald-700 transition  w-auto sm:w-auto self-center sm:self-auto"
                >
                    Add Book
                </button>
            </div>

            <div className="overflow-x-auto">
                <BookTable books={books} onDelete={deleteBook} loading={loading} />
            </div>


        </div >
    )
}

export default Home;