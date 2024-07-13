import React, { useState } from "react";
import styled from "styled-components";

function ToDoInput(props) {
  const [text, setText] = useState("");

  return (
    <>
      <InputContainer>
        <div>
          <input
            className="todo-inp"
            onChange={(e) => {
              setText(e.target.value);
            }}
            value={text}
            placeholder="Write Your Daily Todo List..!"
            type="text"
          />
          <Button
            onClick={() => {
              props.addData(text);
              setText("");
            }}
            size="small"
          >
            Submit Task
          </Button>
        </div>
      </InputContainer>
    </>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100%;
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }

  input {
    width: 80%;
    padding: 10px;
    margin: 5px 0;
    font-size: 16px;
    @media (max-width: 768px) {
      width: 90%;
      font-size: 14px;
    }
    @media (max-width: 480px) {
      width: 95%;
      font-size: 12px;
    }
  }
`;

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

  @media (max-width: 768px) {
    padding: 5px 30px 5px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 5px 20px 5px;
    font-size: 12px;
  }
`;

export default ToDoInput;
