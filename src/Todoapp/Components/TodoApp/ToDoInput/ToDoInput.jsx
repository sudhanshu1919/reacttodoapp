import React, { useState } from "react";

// I have imports UI Items
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

import addItem from "../../../assets/images/add.png";

function ToDoInput(props) {
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div>
          <div>
            <input
              onChange={(e) => {
                setText(e.target.value);
                // alert(e.target.value);
              }}
              value={text}
              placeholder="NEW TODO..."
              type="text"
            />

            <br />
            <Button
              onClick={() => {
                props.addData(text);
                setText(" ");
              }}
              size="small"
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoInput;
