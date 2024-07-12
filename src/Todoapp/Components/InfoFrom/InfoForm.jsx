import React, { useState } from "react";
import styled from "styled-components";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
function InfoForm() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmaile] = useState("");
  const [address, setAddress] = useState("");

  return (
    <>
      <MainConatiner>
        <Conatiner>
          <Navigation />

          <div className="container mt-3">
            <div className="row mt-4 mb-4">
              <h4 className="info-headding"> Live Information Form</h4>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="col-6">
                  <div className="contact-form">
                    <div id="success"></div>
                    <form
                      name="sentMessage"
                      id="contactForm"
                      novalidate="novalidate"
                    >
                      <div className="form-row">
                        <div className="control-group col-sm-6 INput mb-3">
                          <input
                            type="text"
                            className="todo-inp"
                            id="name"
                            placeholder="Name"
                            required="required"
                            data-validation-required-message="Please enter your name"
                            name="Name"
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>

                        <div className="control-group col-sm-6 INput mb-3">
                          <input
                            type="text"
                            className="todo-inp"
                            id="email"
                            placeholder="Mobile Number"
                            required="required"
                            name="Mobile"
                            onChange={(e) => {
                              setMobile(e.target.value);
                            }}
                          />
                        </div>

                        <div className="control-group col-sm-6 INput mb-3">
                          <input
                            type="text"
                            className="todo-inp"
                            id="email"
                            placeholder="Email"
                            required="required"
                            name="Email"
                            onChange={(e) => {
                              setEmaile(e.target.value);
                            }}
                          />
                        </div>
                        <div className="control-group col-sm-6 INput mb-3">
                          <input
                            type="text"
                            className="todo-inp"
                            id="address"
                            placeholder="Address"
                            required="required"
                            name="Email"
                            onChange={(e) => {
                              setAddress(e.target.value);
                            }}
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="">
                  <p className="info-text">
                    Name : <span className="mx-2">{name}</span>
                  </p>
                  <p className="info-text">
                    Mobile Number : <span className="mx-2">{mobile}</span>
                  </p>
                  <p className="info-text">
                    Email : <span className="mx-2">{email}</span>
                  </p>
                  <p className="info-text">
                    Address : <span className="mx-2">{address}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
export default InfoForm;
