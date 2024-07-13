// import React, { useState } from "react";
// import { sculptureList } from "./data.js";
// import styled from "styled-components";
// import Navigation from "../Navigation/Navigation";
// import Footer from "../Footer/Footer.jsx";
// function Carousel() {
//   //   console.log(sculptureList);

//   const [index, setIndex] = useState(0);

//   // wee have give data from useState Hook in the new variable..!
//   let product = sculptureList[index];

//   // This is show more button
//   const [showmore, setShoMore] = useState(false);
//   let hasnext = true;

//   // this is for Next Buttons
//   function handleClick() {
//     setIndex(index + 1);
//   }

//   // this is for Privious Button

//   function handelClickPrev() {
//     setIndex(index - 1);
//   }

//   return (
//     <>
//       <MainConatiner>
//         <Conatiner>
//           <Navigation />
//           <MainCard>
//             <div>
//               <h4 className="text-center text-white mb-3">Shopping Card</h4>
//               <div className="MainCard" style={{ width: "20rem" }}>
//                 <img
//                   style={{ width: "250px" }}
//                   className="card-img-top"
//                   src={product.image}
//                   alt="Card image cap"
//                 />
//                 <div className="card-body mt-3">
//                   <div>
//                     <h5>{product.Name}</h5>
//                     <span>
//                       Products <b>{index + 1}</b> of{" "}
//                       <b>{sculptureList.length}</b>
//                     </span>
//                   </div>

//                   <div>
//                     <span className="card-title">{product.Category}</span>
//                     <span className="card-title">
//                       <b>{product.price}</b>
//                     </span>
//                   </div>

//                   <Button
//                     className="mt-2"
//                     onClick={() => {
//                       setShoMore(!showmore);
//                     }}
//                   >
//                     See Information
//                   </Button>
//                   <p>{showmore && product.About}</p>
//                 </div>

//                 <div
//                   className="card-body"
//                   style={{ display: "flex", justifyContent: "space-between" }}
//                 >
//                   <Button
//                     onClick={handelClickPrev}
//                     disabled={index <= 0 ? true : false}
//                   >
//                     Previous
//                   </Button>
//                   <Button
//                     onClick={handleClick}
//                     disabled={index >= sculptureList.length - 1 ? true : false}
//                   >
//                     Next
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </MainCard>

//           <Footer />
//         </Conatiner>
//       </MainConatiner>
//     </>
//   );
// }

// const MainConatiner = styled.div`
//   background-image: url("https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
//   background-repeat: no-repeat;
//   background-size: cover;
//   width: 100%;
//   height: 100vh;
// `;
// const Conatiner = styled.div`
//   background-color: rgba(0, 0, 0, 0.5);
//   width: 100%;
//   height: 100vh;
// `;

// const MainCard = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 70px;
// `;

// const Button = styled.button`
//   background-color: #4caf50;
//   border: none;
//   color: white;
//   padding: 5px 40px 5px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
//   margin: 4px 2px;
//   cursor: pointer;
//   border: 2px solid rgb(255, 255, 255);
//   &:hover {
//     background-color: #45a049;
//   }
// `;
// export default Carousel;

import React, { useState } from "react";
import { sculptureList } from "./data.js";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer.jsx";

function Carousel() {
  const [index, setIndex] = useState(0);
  let product = sculptureList[index];
  const [showmore, setShoMore] = useState(false);

  function handleClick() {
    setIndex(index + 1);
  }

  function handelClickPrev() {
    setIndex(index - 1);
  }

  return (
    <>
      <MainConatiner>
        <Conatiner>
          <Navigation />
          <MainCard>
            <div className="MainCard">
              <h4 className="text-center mb-3">Books</h4>
              <Card>
                <img
                  className="card-img-top"
                  src={product.image}
                  alt="Card image cap"
                />
                <div className="card-body mt-3">
                  <div>
                    <h5>{product.Name}</h5>
                    <span>
                      Products <b>{index + 1}</b> of{" "}
                      <b>{sculptureList.length}</b>
                    </span>
                  </div>

                  <div>
                    <span className="card-title">{product.Category}</span>
                    <span className="card-title">
                      <b>{product.price}</b>
                    </span>
                  </div>

                  <Button
                    className="mt-2"
                    onClick={() => {
                      setShoMore(!showmore);
                    }}
                  >
                    About information
                  </Button>
                  <p>{showmore && product.About}</p>
                </div>

                <div className="card-body buttons-container">
                  <Button onClick={handelClickPrev} disabled={index <= 0}>
                    Previous
                  </Button>
                  <Button
                    onClick={handleClick}
                    disabled={index >= sculptureList.length - 1}
                  >
                    Next
                  </Button>
                </div>
              </Card>
            </div>
          </MainCard>

          <Footer />
        </Conatiner>
      </MainConatiner>
    </>
  );
}

const MainConatiner = styled.div`
  background-image: url("https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Conatiner = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
`;

const MainCard = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 70px;
`;

const Card = styled.div`
  width: 20rem;

  img {
    width: 50%;
    border-radius: 10px;
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    width: 15rem;

    img {
      width: 100%;
    }
  }

  @media (max-width: 480px) {
    width: 10rem;

    img {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 20px;
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
    padding: 5px 15px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    padding: 5px 10px;
    font-size: 12px;
  }
`;

export default Carousel;
