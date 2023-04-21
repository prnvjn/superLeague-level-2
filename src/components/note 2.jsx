import DeleteIcon from "@mui/icons-material/Delete";
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
import Inputfield from "./inpufield";

const Note = (props) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const [editData, setEditedData] = useState("");
  return (
    <div className="note">
      {!edit ? (
        <div className="contents">
          {/* header */}
          <div className="contentHeader">
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
          </div>

          <div className="dueDate">
            <p> Due on {props.dueDate}</p>
          </div>
          {/* paragraph */}
          <div className="taskparagarph">
            <p>{props.description}</p>
          </div>
          {/* delete */}
          <button
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
            }}>
            <DeleteIcon />
          </button>
        </div>
      ) : (
        <Inputfield />
      )}
    </div>
  );
};
export default Note;
