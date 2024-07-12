import React from "react";
import { Outlet, Link } from "react-router-dom";
import styled from "styled-components";
import Erro from "../../assets/images/erros.png";
import Footer from "../Footer/Footer";
function Nopage() {
  return (
    <>
      <MainConatiner>
        <Conatiner>
          <h2 className="text-center p-4 text-white ">ERROR - 404</h2>
          <div className="text-center mt-5">
            <img src={Erro} alt="Error" width="450px" />
          </div>

          <div className="text-center">
            <Link to="/">
              <Button>Back To Home :) </Button>
            </Link>
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

export default Nopage;
