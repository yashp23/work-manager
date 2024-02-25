import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { taskid } = params;
    try {
        const task = await Task.findById(taskid);
        if (!task) {
            return NextResponse.json({
                msg: "Task not found",
                status: 404
            });
        }
        console.log(task);
        return NextResponse.json(task);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "Failed to get task",
            status: 500
        });
    }
}

export async function PUT(request, { params }) {
    const { taskid } = params;
    try {
        const { title, content, status } = await request.json();
        const task = await Task.findById(taskid);
        if (!task) {
            return NextResponse.json({
                msg: "Task not found",
                status: 404
            });
        }
        task.title = title;
        task.content = content;
        task.status = status;

        const result = await task.save();
        console.log(result);
        return NextResponse.json({
            msg: "Task updated successfully",
            status: 200,
            data: result
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "Failed to update task",
            status: 500
        });
    }

}

export async function DELETE(request, { params }) {
    const { taskid } = params;
    try {
        const deleteId = await Task.deleteOne({
            _id: taskid
        });
        console.log(deleteId);
        return NextResponse.json(deleteId, {
            msg: "task deleted successfully",
            status: true
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "failed to deleted task",
            status: 404
        })
    }
}
