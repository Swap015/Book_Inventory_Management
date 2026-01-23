import { Link, useNavigate } from "react-router-dom";

const BookTable = ({ books = [], onDelete }) => {
    const navigate = useNavigate();

    return (
        <div className="mt-4 max-h-[400px] overflow-y-auto border rounded-lg shadow">


            <table className="w-full border-collapse">
                <thead className="bg-gray-100 sticky top-0">
                    <tr>
                        <th className="border px-4 py-2 text-left">Title</th>
                        <th className="border px-4 py-2 text-left">Author</th>
                        <th className="border px-4 py-2 text-left">Publisher</th>
                        <th className="border px-4 py-2 text-center">Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {books.length === 0 ? (
                        <tr>
                            <td
                                colSpan="4"
                                className="text-center py-6 text-gray-500"
                            >
                                No books found
                            </td>
                        </tr>
                    ) : (books.map((book) => (
                        <tr
                            key={book._id}
                            className="hover:bg-gray-50"
                        >
                            <td className="border px-4 py-2">
                                {book.title}
                            </td>
                            <td className="border px-4 py-2">
                                {book.author}
                            </td>
                            <td className="border px-4 py-2">
                                {book.publisher}
                            </td>
                            <td className="border px-4 py-2">
                                <div className="flex gap-2 justify-center">

                                    <Link
                                        to={`/book/${book._id}`}
                                        className="px-3 py-1 text-sm bg-gray-400 font-bold text-black rounded hover:bg-gray-500"
                                    >
                                        View
                                    </Link>

                                    <Link
                                        to={`/edit/${book._id}`}
                                        className="px-3 py-1 text-sm bg-yellow-500 text-black font-bold rounded hover:bg-yellow-600"
                                    >
                                        Edit
                                    </Link>

                                    <button
                                        onClick={() => onDelete(book._id)}
                                        className="px-3 py-1 text-sm bg-red-500 text-black font-bold rounded hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BookTable;
