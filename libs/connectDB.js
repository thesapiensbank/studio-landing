import mongoose from "mongoose";

const connectDB = async () => mongoose.connect(process.env.ATLAS_URI);

export default connectDB;
