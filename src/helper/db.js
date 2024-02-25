import mongoose from "mongoose";
import { User } from "../models/schema.js"

export const connectDb = async () => {

    try {
        const { connection } = await mongoose.connect(process.env.MONO_DB_URL, { dbName: "work_manager" })
        console.log("connection successful");
        console.log(connection);

        const uuser = new User({
            name: "test name",
            email: "test@gmail.com",
            password: "testpassword",
            about: "this is testing"
        })

        const result = await uuser.save();
        console.log(result);

    } catch (error) {
        console.log("failed to connect with mongodb")
        console.log(error);
    }
}