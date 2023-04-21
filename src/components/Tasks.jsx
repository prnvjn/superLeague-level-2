import React, { inputRef, useState } from "react";
import crossIcon from "../assets/images/icon-cross.svg";
import checkicon from "../assets/images/icon-check.svg";
import { useDispatch } from "react-redux";
import {
  removeTask,
  updateTask,
  markComplete,
  markCompletePending,
  markpendingComplete,
  deleteFromCompleted,
  deleteFromPending,
} from "../statecontroller/tasksSlice";

const Tasks = (props) => {
  const [edit, setEdit] = useState(false);
  //  console.log(props)
  const dispatch = useDispatch();
  const [editData, setEditedData] = useState("");
  return (
    <div className="taskcontainer">
      <div
        className="circle"
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

          if (props.filters === "Pending") {
            if (props.status !== "Completed") {
              dispatch(
                markpendingComplete({
                  id: props.id,
                  status: "Completed",
                })
              );
            } else {
              dispatch(
                markpendingComplete({
                  id: props.id,
                  status: "Pending",
                })
              );
            }
          } else if (props.filters === "Completed") {
            if (props.status !== "Completed") {
              dispatch(
                markCompletePending({
                  id: props.id,
                  status: "Completed",
                })
              );
            } else {
              dispatch(
                markCompletePending({
                  id: props.id,
                  status: "Pending",
                })
              );
            }
          }
        }}>
        <img
          className={props.status === "Completed" ? "check" : "uncheck"}
          src={checkicon}
          alt=""
        />
      </div>

      {!edit ? (
        <div className="taskcard">
          <h1
            id={props.id}
            className="task"
            onClick={(e) => {
              setEdit(true);
              console.log(e.target);
            }}
            status={props.status}>
            {props.title}
          </h1>

          <p>{props.description}</p>
        </div>
      ) : (

        <form action="" className="form">
          <input
            onChange={(e) => {
              setEditedData(e.target.value);
            }}

        <form
          onSubmit={(e) => {
            setEdit(false);
            e.preventDefault();
          }}
          action=""
          className="form">
          <input

            className="input-form"
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
          if (props.filters === "Pending") {
            dispatch(
              deleteFromPending({
                id: props.id,
              })
            );
          } else if (props.filters === "Completed") {
            dispatch(
              deleteFromCompleted({
                id: props.id,
              })
            );
          }
        }}
        src={crossIcon}
        alt="delete"
      />

      <div className="dueDate">
        <p> Due on {props.dueDate}</p>
      </div>
    </div>
  );
};

export default Tasks;

// /

// <div className="inputfield">
// <div className="circle"></div>
// <form

//    action="" className="form">
//   <input
//     className="input-form"
//     placeholder="Add your new task"
//     type="text"
//     value ={formData}
//     onChange={e=>{
//       setFormData(e.target.value)
//     }}
//     ref={inputRef}
//   />
//   <button type="submit" hidden></button>
// </form>
