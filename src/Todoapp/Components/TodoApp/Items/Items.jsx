import React, { useState } from "react";
import Edit from "../../../assets/images/edit.png";
import Delete from "../../../assets/images/delete.png";
import Right from "../../../assets/images/right.png";
import Wrong from "../../../assets/images/x-mark.png";

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

  return (
    <div>
      {isEditing ? (
        <>
          <div>
            <input
              type="text"
              value={inpText}
              onChange={(e) => setInpText(e.target.value)}
            />
          </div>

          <div>
            <div className="mt-2">
              <img src={Right} width="25px" alt="Right" />
            </div>

            <div className="mt-1">
              <button onClick={handleUpdate}>
                <img src={Wrong} width="25px" alt="Wrong" />
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <p>{props.item}</p>
          </div>

          <div>
            <button onClick={() => setEditing(true)}>
              <img src={Edit} width="30px" alt="Edit" />
            </button>
            <button onClick={() => props.deleteData(props.item)}>
              <img src={Delete} width="30px" alt="Delete" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Items;
