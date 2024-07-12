import React from "react";
import styled from "styled-components";
import Items from "../Items/Items";
function ToDoItems(props) {
  return (
    <>
      <div>
        <MainConatiner>
          {props.data.map((item, index) => (
            <Items
              item={item}
              deleteData={props.deleteData}
              isEditing={props.isEditing}
              setEditing={props.setEditing}
              updateData={props.updateData}
            />
          ))}
        </MainConatiner>
      </div>
    </>
  );
}

const MainConatiner = styled.div`
  overflow-y: auto;
  height: 60vh;
  margin-top: 20px;
`;
export default ToDoItems;
