"use client";
import React, { useContext, useEffect, useState } from "react";
import UserContext from "@/context/userContext";
import { deleteTask, getTaskOfUser } from "@/services/taskService";
import TaskData from "./TaskData";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const ShowTasks = () => {
  const context = useContext(UserContext);
  const [tasks, setTask] = useState([]);

  async function loadTasks(userId) {
    try {
      const tasks = await getTaskOfUser(userId);
      setTask([...tasks].reverse());
      console.log(tasks);
    } catch (error) {
      console.log(error);
      toast.error("task not show");
    }
  }

  useEffect(() => {
    if (context.user) {
      loadTasks(context.user._id);
    }
  }, [context.user]);

  async function deleteTaskParent(taskid) {
    try {
      const confirmResult = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel",
      });

      if (confirmResult.isConfirmed) {
        const result = await deleteTask(taskid);
        console.log(result);

        const newTasks = tasks.filter((item) => item._id !== taskid);
        setTask(newTasks);
        toast.success("Your task has been deleted");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in deleting task");
    }
  }

  return (
    <div className="grid grid-cols-12 mt-3">
      <div className="col-span-6 col-start-4">
        <h1 className="text-3xl mb-3 ">Your tasks ( {tasks.length} )</h1>

        {tasks.map((task) => (
          <TaskData
            task={task}
            key={task._id}
            deleteTaskParent={deleteTaskParent}
          />
        ))}
      </div>
    </div>
  );
};

export default ShowTasks;
