
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
        type: String,
        required: true
    },
    publishedDate: {
        type: Date
    },
    price: {
        type: Number,
        required: true
    },
    overview: {
        type: String
    }
},
    { timestamps: true }

);

export default mongoose.model("Books", bookSchema);