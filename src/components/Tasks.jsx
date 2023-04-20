import React, { inputRef, useState } from "react";
import crossIcon from "../assets/images/icon-cross.svg";
import checkicon from "../assets/images/icon-check.svg";

const Tasks = (props) => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="taskcontainer">
      <div className="circle">
        <img src={checkicon} alt="" />
      </div>
      {!edit ? (
        <li
          className="task"
          onClick={(e) => {
            setEdit(true);
          }}
          value={props.value}
          status={props.status}>
          {" "}
          {props.title}
        </li>
      ) : (
        <form
          onSubmit={(e) => {
            setEdit(false);
            e.preventDefault();
          }}
          action=""
          class="form">
          <input
            class="input-form"
            placeholder={props.title}
            type="text"
            ref={inputRef}
          />
        </form>
      )}

      <img src={crossIcon} />
    </div>
  );
};

export default Tasks;
