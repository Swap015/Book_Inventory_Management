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
            setBooks(res.data);
        };
        getBooks();

    }, [API_URL]);


    const deleteBook = async (id) => {

        if (confirm("Are you sure, you want to delete this ?")) {
            await axios.delete(`${API_URL}/${id}`);

            const res = await axios.get(`${API_URL}`);
            setBooks(res.data)
        }
    }




    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">
                Books Inventory
            </h2>


            <button onClick={() => navigate("/add")}>Add Book</button>


            <BookTable books={books} onDelete={deleteBook} />


        </div >
    )
}

export default Home;