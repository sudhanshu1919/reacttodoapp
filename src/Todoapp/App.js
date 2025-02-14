// import React, { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navigation from "./Components/Navigation/Navigation";
// import MainToDo from "./Components/TodoApp/MainToDo/MainToDo";
// import Carousel from "./Components/Carousel/Carousel";
// import InfoForm from "./Components/InfoFrom/InfoForm";

// import Nopage from "./Components/Nopage/Nopage";

// function App(value) {
//   const [data, setData] = useState([]);

//   // This is for edite data in the todo items..1
//   const [isEditing, setEditing] = useState(false);

//   const addData = (item) => {
//     // alert(item);
//     setData([...data, item]);
//   };

//   const deleteData = (value) => {
//     // alert(value);
//     const newData = data.filter((item) => item !== value);
//     setData(newData);
//   };

//   const updateData = () => {
//     let newData = data.map((item, i) => {
//       if (i === value.index) {
//         return value.newv;
//       } else {
//         return item;
//       }
//     });
//     console.log(newData);
//     setData(newData);
//   };

//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <MainToDo
//                 data={data}
//                 addData={addData}
//                 deleteData={deleteData}
//                 isEditing={isEditing}
//                 setEditing={setEditing}
//                 updateData={updateData}
//               />
//             }
//           />
//           <Route
//             path="/MainToDo"
//             element={
//               <MainToDo
//                 data={data}
//                 addData={addData}
//                 deleteData={deleteData}
//                 isEditing={isEditing}
//                 setEditing={setEditing}
//                 updateData={updateData}
//               />
//             }
//           />
//           <Route path="/Carousel" element={<Carousel />} />
//           <Route path="/InfoForm" element={<InfoForm />} />
//           <Route path="*" element={<Nopage />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import MainToDo from "./Components/TodoApp/MainToDo/MainToDo";
import Carousel from "./Components/Carousel/Carousel";
import InfoForm from "./Components/InfoFrom/InfoForm";
import Nopage from "./Components/Nopage/Nopage";

function App() {
  const [data, setData] = useState([]);

  // This is for edit data in the todo items
  const [isEditing, setEditing] = useState(false);

  const addData = (item) => {
    setData([...data, item]);
  };

  const deleteData = (value) => {
    const newData = data.filter((item) => item !== value);
    setData(newData);
  };

  const updateData = (updatedData) => {
    const newData = data.map((item, i) =>
      i === updatedData.index ? updatedData.newv : item
    );
    setData(newData);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainToDo
                data={data}
                addData={addData}
                deleteData={deleteData}
                isEditing={isEditing}
                setEditing={setEditing}
                updateData={updateData}
              />
            }
          />
          <Route
            path="/MainToDo"
            element={
              <MainToDo
                data={data}
                addData={addData}
                deleteData={deleteData}
                isEditing={isEditing}
                setEditing={setEditing}
                updateData={updateData}
              />
            }
          />
          <Route path="/Carousel" element={<Carousel />} />
          <Route path="/InfoForm" element={<InfoForm />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
