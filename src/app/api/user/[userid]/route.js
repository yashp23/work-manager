import { User } from "@/models/schema";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    const { userid } = params;
    try {
        const deleteUser = await User.deleteOne({
            _id: userid
        })
        console.log(deleteUser);
        return NextResponse.json({ msg: "user delete successfully", success: true })
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            msg: "failed to delete user",
            status: false
        })
    }

}

export async function GET(request, { params }) {
    const { userid } = params;
    try {
        const users1 = await User.findById(userid)
        console.log(users1);
        return NextResponse.json(users1);
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            msg: "user not  get successfully"
        })
    }
}

export async function PUT(request, { params }) {
    const { userid } = params;
    const { name, password, about, profileURL } = await request.json();
    try {
        const UpdateUser = await User.findById(userid);
        UpdateUser.name = name;
        UpdateUser.password = password;
        UpdateUser.about = about;
        UpdateUser.profileURL = profileURL;

        const updateUser1 = await UpdateUser.save();
        console.log(updateUser1);
        return NextResponse.json(updateUser1)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ msg: "user does not updated", status: false })
    }
}