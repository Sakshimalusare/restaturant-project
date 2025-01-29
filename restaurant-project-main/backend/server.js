import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import 'dotenv/config.js'

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

// Serve static files (images)
app.use("/uploads", express.static("uploads"));

connectDB();

app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads') )
app.use("/api/user",userRouter)

app.get("/", (req, res) => {
    res.send("API working");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
