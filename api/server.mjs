
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import bookRoutes from "./route/bookRoutes.mjs";


const app = express();

const allowedOrigins = [

    "http://localhost:5173",
    process.env.FRONTEND_URL

];

app.use(cors({
    origin: allowedOrigins
}));

app.use(express.json());

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;


mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection failed:", error);
    });



app.use("/api/books", bookRoutes);


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})