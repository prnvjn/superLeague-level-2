import React, { inputRef, useState } from "react";
import crossIcon from "../assets/images/icon-cross.svg";
import checkicon from "../assets/images/icon-check.svg";
import { useDispatch } from "react-redux";
import {
  addTask,
  removeTask,
  updateTask,
  markComplete,
  getTasks,
} from "../statecontroller/tasksSlice";

const Tasks = (props) => {
  const [edit, setEdit] = useState(false);
  //  console.log(props)
  const dispatch = useDispatch();
  const [editData, setEditedData] = useState("");
  return (
    <div className="taskcontainer">
      <div
        className={props.className}
        onClick={(e) => {
          if (props.status !== "Completed") {
            dispatch(
              markComplete({
                id: props.id,
                status: "Completed",
              })
            );
          } else {
            dispatch(
              markComplete({
                id: props.id,
                status: "Pending",
              })
            );
          }
        }}>
        <img
          className={props.status === "Completed" ? "check" : "uncheck"}
          src={checkicon}
          alt=""
        />
      </div>
      {!edit ? (
        <li
          id={props.id}
          className="task"
          onClick={(e) => {
            setEdit(true);
            console.log(e.target);
          }}
          status={props.status}>
          {props.title}
        </li>
      ) : (
<<<<<<< Updated upstream
        <form
          onSubmit={(e) => {
            setEdit(false);
            e.preventDefault();
          }}
          action=""
          class="form">
          <input
            class="input-form"
=======
        <form action="" className="form">
          <input
            onChange={(e) => {
              setEditedData(e.target.value);
            }}
            className="input-form"
>>>>>>> Stashed changes
            placeholder={props.title}
            type="text"
            id={props.id}
            ref={inputRef}
            value={editData}
          />
          <button
            onClick={(e) => {
              setEdit(false);
              e.preventDefault();
              dispatch(
                updateTask({
                  id: props.id,
                  title: editData,
                })
              );
              setEditedData("");
            }}
            type="submit">
            Submit
          </button>
        </form>
      )}

      <img
        className={props.hide}
        onClick={() => {
          dispatch(
            removeTask({
              id: props.id,
            })
          );
        }}
        src={crossIcon}
        alt="delete"
      />
    </div>
  );
};

export default Tasks;
