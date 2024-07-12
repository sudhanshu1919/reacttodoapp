import React, { useState } from "react";
import Edit from "../../../assets/images/edit.png";
import Delete from "../../../assets/images/delete.png";
import Right from "../../../assets/images/right.png";
import Wrong from "../../../assets/images/x-mark.png";
import styled from "styled-components";
function Items(props) {
  const [isEditing, setEditing] = useState(false);
  const [inpText, setInpText] = useState(props.item);

  const handleUpdate = () => {
    const updatedData = {
      index: props.index,
      prev: props.item,
      newv: inpText,
    };
    props.updateData(updatedData);
    setEditing(false);
  };

  const handleCancel = () => {
    setInpText(props.item); // Reset the input text to the original value
    setEditing(false);
  };

  return (
    <div className="item-container">
      {isEditing ? (
        <>
          <ItmCon>
            <div>
              <input
                className="todo-inp2"
                type="text"
                value={inpText}
                onChange={(e) => setInpText(e.target.value)}
              />
            </div>

            <div>
              <Button onClick={handleUpdate} className="mx-1">
                <img src={Right} width="25px" alt="Right" />
              </Button>
              <Button onClick={handleCancel}>
                <img src={Wrong} width="25px" alt="Wrong" />
              </Button>
            </div>
          </ItmCon>
        </>
      ) : (
        <>
          <ItmCon2>
            <div>
              <p className="todo-inp3 mt-2">{props.item}</p>
            </div>

            <div>
              <Button className="mx-1" onClick={() => setEditing(true)}>
                <img src={Edit} width="30px" alt="Edit" />
              </Button>

              <Button
                className="mt-2"
                onClick={() => props.deleteData(props.item)}
              >
                <img src={Delete} width="30px" alt="Delete" />
              </Button>
            </div>
          </ItmCon2>
        </>
      )}
    </div>
  );
}

const ItmCon = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 28px 5px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border: 2px solid rgb(255, 255, 255);

  &:hover {
    background-color: #45a049;
  }
`;

const ItmCon2 = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Items;
