import { useNavigate } from "react-router-dom";

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
                    ) : (
                        books.map((book) => (
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
                                        <button
                                            onClick={() => navigate(`/book/${book._id}`)}
                                            className="px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            View
                                        </button>

                                        <button
                                            onClick={() => navigate(`/edit/${book._id}`)}
                                            className="px-3 py-1 text-sm bg-yellow-500 text-white rounded hover:bg-yellow-600"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => onDelete(book._id)}
                                            className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600"
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
