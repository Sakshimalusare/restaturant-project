import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
        .connect("mongodb+srv://malusaresakshi50:sakshi123@cluster0.lf2wg.mongodb.net/food")
        .then(() => console.log("DB connected"))
        .catch((error) => console.log("DB connection error:", error));
};
