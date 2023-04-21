import React, { useRef, useState } from "react";
import moonicon from "../assets/images/icon-moon.svg";
import { useDispatch, useSelector } from "react-redux";
import checkicon from "../assets/images/icon-check.svg";
import Tasks from "../components/Tasks";
import {
  addTask,
  getTasks,
  getall,
  getCompleted,
  getPending,
  deleteCompleted,
  getCompletedTasks,
  getPendingTasks,
  markComplete,
} from "../statecontroller/tasksSlice";
import Inputfield from "./inpufield";
import Note from ".//note";



export const TodoCard = (props, { taskData }) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const completedTasks = useSelector(getCompletedTasks);
  const pendingTasks = useSelector(getPendingTasks);
  const [title, setTitle] = useState("");
  const [descript, setDescription] = useState("");
  const [filter, setFilter] = useState("All");
  const [formData,setFormData] = useState("") 

  return (
    <div className="body">
      <div className="tasks">
        <div className="tasksheader">
          <h1>My Tasks</h1>
          <img src={moonicon} alt="theme mode img" />
        </div>
        <Inputfield
          title={props.title}
          titleValue={title}
          handleTitleEdit={(e) => {
            setTitle(e.target.value);
            console.log(e.target.value);
          }}
          contentValue={descript}
          changeContent={(e) => {
            console.log(e.target.value);
            setDescription(e.target.value);
          }}
          description={props.description}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(e.target);
            dispatch(
              addTask({
                title: e.target.title,
                description: e.target.description,
                status: "pending",
                dueDate: e.target.calender,
                user: "john",
              
              })
            );
          }}
        />

        <div className="alltaskscontainer">
          <footer className="taskscontrols">
            <p>{tasks.length} Tasks</p>
            <div className="statuscard">
              <p
                onClick={() => {
                  dispatch(getall());
                  setFilter("All");
                }}
                className="task_status">
                All
              </p>
              <p
                onClick={() => {
                  dispatch(getPending());
                  setFilter("Pending");
                }}
                className="task_status">
                Pending
              </p>
              <p
                onClick={() => {
                  dispatch(getCompleted());
                  setFilter("Completed");
                }}
                className="task_status">
                Completed
              </p>
            </div>

            <p
              onClick={() => {
                console.log("clearing all");
                dispatch(deleteCompleted());
                setFilter("All");
              }}
              className="task_status">
              Clear Completed
            </p>
          </footer>
        </div>
      </div>
      <div className="tasklist">
        {filter === "All" &&
          tasks.map((task, index) => {
            return (
              <Note
                key={index}
                id={task.id}
                title={task.title}
                status={task.status}
                className={"circle"}
                dueDate={task.dueDate}
                description={task.description}
              />
            );
          })}


        {filter === "Pending" &&
          pendingTasks.map((task, index) => {
            return (
              <Note
                key={index}
                id={task.id}
                title={task.title}
                status={task.status}
                className={"circle"}
                filters={filter}
                dueDate={task.dueDate}
                description={task.description}
              />
            );
          })}

        {filter === "Completed" &&
          completedTasks.map((task, index) => {
            return (
              <Note
                key={index}
                id={task.id}
                title={task.title}
                status={task.status}
                className={"circle"}
                filters={filter}
                description={task.description}
              />
            );
          })}
      </div>
    </div>
  );
};
