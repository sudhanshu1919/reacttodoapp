import React, { useState } from "react";
import styled from "styled-components";
function ToDoInput(props) {
  const [text, setText] = useState("");

  return (
    <>
      <div>
        <div>
          <div>
            <input
              className="todo-inp"
              onChange={(e) => {
                setText(e.target.value);
                // alert(e.target.value);
              }}
              value={text}
              placeholder="Write Your Daily Todo List..!"
              type="text"
            />

            <Button
              onClick={() => {
                props.addData(text);
                setText(" ");
              }}
              size="small"
            >
              Submit Task
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 40px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: 2px solid rgb(255, 255, 255);

  &:hover {
    background-color: #45a049;
  }
`;
export default ToDoInput;
