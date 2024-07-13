import React from "react";
import styled from "styled-components";
import ToDoInput from "../ToDoInput/ToDoInput";
import ToDoItems from "../ToDoItems/ToDoItems";
import Navigation from "../../Navigation/Navigation";
import Footer from "../../Footer/Footer";

function MainToDo(props) {
  return (
    <>
      <MainContainer>
        <Container>
          <Navigation />
          <ItemContainer>
            <div>
              <Text>Write Your Daily Todo List :)</Text>

              <ToDoInput addData={props.addData} />
              <ToDoItems
                data={props.data}
                deleteData={props.deleteData}
                isEditing={props.isEditing}
                setEditing={props.setEditing}
                updateData={props.updateData}
              />
            </div>
          </ItemContainer>
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 768px) {
    height: auto;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  text-align: center;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    margin-top: 10px;
  }
`;

const Text = styled.p`
  font-size: 35px;
  color: white;
  @media (max-width: 768px) {
    font-size: 25px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export default MainToDo;
