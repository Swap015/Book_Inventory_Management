
import mongoose from "mongoose";


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    publishedDate: {
        type: Date
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
},
    { timestamps: true }

);

export default mongoose.model("Books", bookSchema);