import bcrypt from 'bcrypt';
import { connectDb } from "@/helper/db";
import { User } from "@/models/schema";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
    let users = [];
    try {
        const users = await User.find().select("-password")
        console.log(users);
        return NextResponse.json(users);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error, {
            msg: "user get successfully"
        })
    }
}

export async function POST(request) {
    const { name, email, password, about, profileURL } = await request.json();

    const user = new User({ name, email, password, about, profileURL })

    try {

        user.password = bcrypt.hashSync(user.password, 10);

        const createUser = await user.save()
        console.log(user)

        return NextResponse.json(user, { status: 201 })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "failed to create user",
            status: false
        })
    }
}