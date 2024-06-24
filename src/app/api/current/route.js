import jwt from "jsonwebtoken";
import { User } from "@/models/schema";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const authToken = request.cookies.get("authToken")?.value;

        if (!authToken) {
            // Handle case where authentication token is missing
            return NextResponse.error("Authentication token missing", { status: 404 });
        }

        const token = jwt.verify(authToken, process.env.JWT_KEY);

        // Assuming token contains the user's _id
        const user = await User.findById(token._id).select("-password");

        if (!user) {
            // Handle case where user data is not found
            return NextResponse.error("User not found", { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        // Handle token verification errors
        console.error("Error verifying authentication token:", error);
        return NextResponse.error("Authentication failed", { status: 404 });
    }
}
