import { Task } from "@/models/task";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
    try {
        const tasks = await Task.find();
        console.log(tasks);
        return NextResponse.json(tasks);
    } catch (error) {
        console.log(error);
        return NextResponse.json(error, {
            msg: "task not get successfully"
        })
    }
}

export async function POST(request) {
    const { title, content, userId, status } = await request.json();

    const authToken = await request.cookies.get("authToken")?.value;


    const data = jwt.verify(authToken, process.env.JWT_KEY);
    console.log(data._id)

    try {
        const tasks = new Task({ title, content, userId: data._id, status });

        const result = await tasks.save();
        console.log(result);
        return NextResponse.json(result, {
            msg: "task added successfully",
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "task not create",
            status: 404,
        })
    }
}
