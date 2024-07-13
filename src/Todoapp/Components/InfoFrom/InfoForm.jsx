// import React, { useState } from "react";
// import styled from "styled-components";
// import Navigation from "../Navigation/Navigation";
// import Footer from "../Footer/Footer";
// function InfoForm() {
//   const [name, setName] = useState("");
//   const [mobile, setMobile] = useState("");
//   const [email, setEmaile] = useState("");
//   const [address, setAddress] = useState("");

//   return (
//     <>
//       <MainConatiner>
//         <Conatiner>
//           <Navigation />

//           <div className="container mt-3">
//             <div className="row mt-4 mb-4">
//               <h4 className="info-headding"> Live Information Form</h4>
//             </div>
//             <div className="row">
//               <div className="col-md-6">
//                 <div className="col-6">
//                   <div className="contact-form">
//                     <div id="success"></div>
//                     <form
//                       name="sentMessage"
//                       id="contactForm"
//                       novalidate="novalidate"
//                     >
//                       <div className="form-row">
//                         <div className="control-group col-sm-6 INput mb-3">
//                           <input
//                             type="text"
//                             className="todo-inp"
//                             id="name"
//                             placeholder="Name"
//                             required="required"
//                             data-validation-required-message="Please enter your name"
//                             name="Name"
//                             onChange={(e) => {
//                               setName(e.target.value);
//                             }}
//                           />
//                         </div>

//                         <div className="control-group col-sm-6 INput mb-3">
//                           <input
//                             type="text"
//                             className="todo-inp"
//                             id="email"
//                             placeholder="Mobile Number"
//                             required="required"
//                             name="Mobile"
//                             onChange={(e) => {
//                               setMobile(e.target.value);
//                             }}
//                           />
//                         </div>

//                         <div className="control-group col-sm-6 INput mb-3">
//                           <input
//                             type="text"
//                             className="todo-inp"
//                             id="email"
//                             placeholder="Email"
//                             required="required"
//                             name="Email"
//                             onChange={(e) => {
//                               setEmaile(e.target.value);
//                             }}
//                           />
//                         </div>
//                         <div className="control-group col-sm-6 INput mb-3">
//                           <input
//                             type="text"
//                             className="todo-inp"
//                             id="address"
//                             placeholder="Address"
//                             required="required"
//                             name="Email"
//                             onChange={(e) => {
//                               setAddress(e.target.value);
//                             }}
//                           />
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-md-6">
//                 <div className="">
//                   <p className="info-text">
//                     Name : <span className="mx-2">{name}</span>
//                   </p>
//                   <p className="info-text">
//                     Mobile Number : <span className="mx-2">{mobile}</span>
//                   </p>
//                   <p className="info-text">
//                     Email : <span className="mx-2">{email}</span>
//                   </p>
//                   <p className="info-text">
//                     Address : <span className="mx-2">{address}</span>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
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
// export default InfoForm;

import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function InfoForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const [submittedData, setSubmittedData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = { name, mobile, email, address };
    setSubmittedData([...submittedData, newData]);
    setName("");
    setMobile("");
    setEmail("");
    setAddress("");
  };

  return (
    <>
      <MainContainer>
        <Container>
          <Navigation />
          <div className="container mt-3">
            <div className="row mt-4 mb-4">
              <h4 className="info-heading">Live Information Form</h4>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="col-6">
                  <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="control-group col-sm-6 input mb-3">
                          <input
                            type="text"
                            className="todo-inp"
                            id="name"
                            placeholder="Name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="control-group col-sm-6 input mb-3">
                          <input
                            type="text"
                            className="todo-inp"
                            id="mobile"
                            placeholder="Mobile Number"
                            required
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                          />
                        </div>
                        <div className="control-group col-sm-6 input mb-3">
                          <input
                            type="email"
                            className="todo-inp"
                            id="email"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="control-group col-sm-6 input mb-3">
                          <input
                            type="text"
                            className="todo-inp"
                            id="address"
                            placeholder="Address"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                          />
                        </div>
                      </div>
                      <Button type="submit">Submit</Button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 leftBox">
                {submittedData.length > 0 && (
                  <div>
                    {submittedData.map((data, index) => (
                      <div key={index} className="submitted-info">
                        <p className="info-text">
                          Name: <span>{data.name}</span>
                        </p>
                        <p className="info-text">
                          Mobile Number: <span>{data.mobile}</span>
                        </p>
                        <p className="info-text">
                          Email: <span>{data.email}</span>
                        </p>
                        <p className="info-text">
                          Address: <span>{data.address}</span>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </Container>
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  background-image: url("https://images.pexels.com/photos/4840134/pexels-photo-4840134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;

  .info-heading {
    color: white;
    text-align: center;
  }

  .submitted-heading {
    color: white;
    text-align: center;
    margin-top: 20px;
  }

  .leftBox {
    overflow-y: scroll;
    height: 300px;
  }
  .submitted-info {
    padding: 10px;
    margin: 0px 0;
    border-radius: 5px;
    overflow-x: auto;

    .info-text {
      font-size: 16px;
      margin: 5px 0;
      color: white;
      span {
        font-weight: bold;
      }
    }
  }
`;

const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: 2px solid white;

  &:hover {
    background-color: #45a049;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;

export default InfoForm;
