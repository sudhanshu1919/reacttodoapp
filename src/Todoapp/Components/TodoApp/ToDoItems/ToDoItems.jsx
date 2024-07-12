import React from "react";

import Items from "../Items/Items";
function ToDoItems(props) {
  return (
    <>
      <div>
        <div>
          {props.data.map((item, index) => (
            <Items
              item={item}
              deleteData={props.deleteData}
              isEditing={props.isEditing}
              setEditing={props.setEditing}
              updateData={props.updateData}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ToDoItems;
