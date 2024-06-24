"use client";
import React, { useEffect, useState } from "react";
import undraw_add_tasks_re_s5yj from "../../assets/undraw_add_tasks_re_s5yj.svg";
import Image from "next/image";
import { addTask } from "@/services/taskService";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
    status: "none",
    userId: "65dde0e15ad6e54bf4082d27",
  });
  useEffect(() => {
    toast("This is a custom toast Notification!", {
      position: "top-center",
    });
  }, [1]);

  const handleAddTask = async (e) => {
    e.preventDefault();
    console.log(task);

    try {
      const result = await addTask(task);
      console.log(result);
      toast.success("Your task is added !!", {
        position: "top-center",
      });
    } catch (error) {
      console.error(error);
      toast.error("Task not added ", {
        position: "top-center",
      });
      return null;
    }
  };

  const handleClearTask = () => {
    setTask({
      title: "",
      content: "",
      status: "none",
      userId: "65ddd2419077bca5128bfd22",
    });
  };

  return (
    <div className="grid grid-cols-12 justify-center my-14 relative">
      <div className="p-5 col-span-5 col-start-1 shadow-sm mt-24 absolute right-1">
        <Image src={undraw_add_tasks_re_s5yj} alt="svg file" />
      </div>
      <div className="p-5 col-span-4 col-start-7 bg-gray-800 rounded-lg shadow-[0px_0px_15px_10px_#1a202c]">
        <h1 className="text-3xl text-center font-bold font-serif">
          Add Your Task Here !!
        </h1>
        <form onSubmit={handleAddTask} className="shadow-2xl">
          <div className="mt-4">
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-full bg-gray-950 focus:ring-red-400 border border-gray-400 focus:shadow-[0px_0px_10px_1px_#4c51bf]"
              id="task_title"
              name="task_title"
              onChange={(e) => {
                setTask({
                  ...task,
                  title: e.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_content"
              className="block text-sm font-medium mb-2"
            >
              Content
            </label>
            <textarea
              className="w-full p-3 rounded-3xl bg-gray-950 focus:ring-black border focus:shadow-[0px_0px_10px_1px_#4c51bf]"
              id="task_content"
              name="task_content"
              cols="30"
              rows="5"
              onChange={(e) => {
                setTask({
                  ...task,
                  content: e.target.value,
                });
              }}
              value={task.content}
            ></textarea>
          </div>
          <div className="mt-4">
            <label
              htmlFor="task_option"
              className="block text-sm font-medium mb-2"
            >
              Status
            </label>
            <select
              className="w-full p-3 rounded-full bg-gray-950 focus:ring-red-400-100 border border-gray-400 focus:shadow-[0px_0px_10px_1px_#4c51bf]"
              id="task_option"
              name="task_status"
              onChange={(e) => {
                setTask({
                  ...task,
                  status: e.target.value,
                });
              }}
              defaultValue={task.status}
            >
              <option value="none" disabled>
                --Selected Status--
              </option>
              <option value="pending">Pending</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 rounded-lg py-2 px-3 hover:bg-blue-800"
            >
              Add Task
            </button>
            <button
              type="button"
              onClick={handleClearTask}
              className="bg-red-600 rounded-lg py-2 px-3 hover:bg-red-800 ml-3"
            >
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
