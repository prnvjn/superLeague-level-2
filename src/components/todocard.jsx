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
} from "../statecontroller/tasksSlice";

export const TodoCard = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const completedTasks = useSelector(getCompletedTasks);
  const pendingTasks = useSelector(getPendingTasks);
  const [formData, setFormData] = useState("");
  const [filter, setFilter] = useState("All");

  return (
    <div className="tasks">
      <div className="tasksheader">
        <h1>My Tasks</h1>
        <img src={moonicon} alt="theme mode img" />
      </div>

      <div className="inputfield">
        <div className="circle"></div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addTask({
                title: formData,
                status: "pending",
                dueDate: "2023-04-30T00:00:00.000Z",
                user: "john",
              })
            );
            setFormData("");
          }}
          action=""
          className="form">
          <input
            className="input-form"
            placeholder="Add your new task"
            type="text"
            value={formData}
            onChange={(e) => {
              setFormData(e.target.value);
            }}
            ref={inputRef}
          />
          <button type="submit" hidden></button>
        </form>
      </div>

      <div className="alltaskscontainer">
        {filter === "All" &&
          tasks.map((task, index) => {
            return (
              <Tasks
                key={index}
                id={task.id}
                title={task.title}
                status={task.status}
                className={"circle"}
              />
            );
          })}

        {filter === "Pending" &&
          pendingTasks.map((task, index) => {
            return (
              <Tasks
                key={index}
                id={task.id}
                title={task.title}
                status={task.status}
                hide={"hide"}
                className={".filter_circle"}
              />
            );
          })}

        {filter === "Completed" &&
          completedTasks.map((task, index) => {
            return (
              <Tasks
                key={index}
                id={task.id}
                title={task.title}
                status={task.status}
                hide={"hide"}
                className={".filter_circle"}
              />
            );
          })}
        <div className="taskscontrols">
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
              setFilter("All")
            }}
            className="task_status">
            Clear Completed
          </p>
        </div>
      </div>
    </div>
  );
};
