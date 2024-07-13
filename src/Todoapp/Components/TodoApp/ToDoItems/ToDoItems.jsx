import React from "react";
import styled from "styled-components";
import Items from "../Items/Items";

function ToDoItems(props) {
  return (
    <>
      <div>
        <MainContainer>
          {props.data.map((item, index) => (
            <Items
              key={index}
              item={item}
              deleteData={props.deleteData}
              isEditing={props.isEditing}
              setEditing={props.setEditing}
              updateData={props.updateData}
              index={index}
            />
          ))}
        </MainContainer>
      </div>
    </>
  );
}

const MainContainer = styled.div`
  overflow-y: auto;
  height: 60vh;
  margin-top: 20px;

  @media (max-width: 768px) {
    height: 50vh;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    height: 55vh;
    margin-top: 10px;
  }
`;

export default ToDoItems;
