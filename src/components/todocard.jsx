import React, { useRef, useState } from "react";
import moonicon from "../assets/images/icon-moon.svg";
import { useDispatch, useSelector } from "react-redux";
import checkicon from "../assets/images/icon-check.svg";
import Tasks from "../components/Tasks";
import {
  addTask,
  removeTask,
  updateTask,
  markComplete,
  getTasks,
} from "../statecontroller/tasksSlice";

export const TodoCard = (props) => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const tasks = useSelector(getTasks);
  const [formData,setFormData] = useState("") 
  return (
    <div className="tasks">
      <div className="tasksheader">
        <h1>My Tasks</h1>
        <img src={moonicon} alt="theme mode img" />
      </div>

      <div className="inputfield">
        <div className="circle"></div>
        <form 
          onSubmit= {(e)=>{
            e.preventDefault()
            dispatch(addTask(
              {
                title: formData,
                status: "pending",
                dueDate: "2023-04-30T00:00:00.000Z",
                user: "john"
              }
            ))
          }}        
           action="" className="form">
          <input
            className="input-form"
            placeholder="Add your new task"
            type="text"
            value ={formData}
            onChange={e=>{
              setFormData(e.target.value)
            }}
            ref={inputRef}
          />
          <button type="submit" hidden></button>
        </form>
      </div>

      <div className="alltaskscontainer">
        {tasks.map((task, index) => {
          return (
            <Tasks
              key={index}
              onClick={(e) => {
                console.log("was clicked", e.target);
              }}
              value={task.id}
              title={task.title}
              status={task.status}
            />
          );
        })}

        <div className="taskscontrols">
          <p>0 Tasks</p>
          <div className="statuscard">
            <p className="task_status">All</p>
            <p className="task_status">Pending </p>
            <p className="task_status">Completed</p>
          </div>

          <p className="task_status">Clear Completed </p>
        </div>
      </div>
    </div>
  );
};
