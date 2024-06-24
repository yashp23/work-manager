import mongoose from "mongoose";

export const connectDb = async () => {

    try {
        const { connection } = await mongoose.connect(process.env.MONO_DB_URL, { dbName: "work_manager" })
        console.log("connection successful");
        console.log(connection);

    } catch (error) {
        console.log("failed to connect with mongodb")
        console.log(error);
    }
}