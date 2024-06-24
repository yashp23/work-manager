import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { userId } = params;
    try {
        const tasks = await Task.find({ userId: userId }); // Assuming you're querying tasks based on userid

        if (!tasks || tasks.length === 0) { // Check if tasks array is empty
            return NextResponse.json({
                msg: "No tasks found for the user",
                status: 404
            });
        }
        console.log(tasks);

        return NextResponse.json(tasks,{
            tasks,
            msg: "User tasks fetched successfully",
            status: 200
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "Failed to fetch tasks for the user",
            status: 500 // Internal Server Error
        });
    }
}
