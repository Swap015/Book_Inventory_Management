import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import EditBook from "./pages/EditBook";
import BookDetails from "./pages/BookDetails";


function App() {


  return (
    <BrowserRouter>
      <Routes>



        <Route path="/" element={<Home />} />
        <Route path="/add-Book" element={<AddBook />} />
        <Route path="/edit/:id" element={<EditBook />} />
        <Route path="/book/:id" element={<BookDetails />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
