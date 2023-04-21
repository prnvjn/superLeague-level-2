import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import Calender from "./datepicker";

function Inputfield(props) {
  const [zoomIn, setZoom] = useState(false);
  return (
    <div className="inputfieldcomponent">
      <form className="create-note" onSubmit={props.onSubmit}>
        <input
          onChange={props.handleTitleEdit}
          className="title"
          name="title"
          value={props.titleValue}
          placeholder="Create New Task"
        />
        <textarea
          onClick={() => setZoom(!zoomIn)}
          name="description"
          onChange={props.changeContent}
          value={props.contentValue}
          placeholder="Enter Description..."
          rows={zoomIn ? "4" : "1"}
        />
        <p>
          <strong>Set Due Date</strong>
        </p>
        <Calender />

        <Zoom in={zoomIn && true}>
          <Fab type="submit" onClick={props.onSubmit}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default Inputfield;
