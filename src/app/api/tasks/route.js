import { Task } from "@/models/task";
import { NextResponse } from "next/server";

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
    const { title, content, userId } = await request.json();
    try {
        const tasks = new Task({ title, content, userId });

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
