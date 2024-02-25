const { default: mongoose } = require("mongoose");

const TaskSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    addedDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["pending", "completed"],
        required: true,
        default: "pending",
    },
    userId: {
        type: mongoose.ObjectId,
        required: true
    },
})

const Task = mongoose.models.Task || mongoose.model("Task", TaskSchema);

module.exports = { Task }
