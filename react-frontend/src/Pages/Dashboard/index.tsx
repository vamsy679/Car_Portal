import React, { useState, useEffect, useContext } from "react";

import ContentHeader from "../../Components/ContentHeader";
import Card from "../../Components/Cards/Cards";
import {
  ActionButton,
  Footer,
  Description,
  DescriptionType,
} from "../../Components/Cards/Cards.styles";
import Modal from "../../Components/Modal/Modal";

import { Container, Content, ModalContent } from "./styles";
import useDashboard from "./useDashboard";
import Form from "./form";
import AuthContext from "../../context/AuthContext";

const Dashboard = () => {
  const {
    isOpen,
    addModal,
    isEditing,
    setAddModal,
    setCarInfo,
    setIsEdititng,
    setIsOpen,
    carInfo,
    handleSubmit,
    handleChange,
    handleEdit,
    id,
    handleDelete,
    setID,
  } = useDashboard();

  const [list, setList] = useState<any[]>([]);
  const { authTokens, logoutUser, user } = useContext(AuthContext);

  useEffect(() => {
    getData();
  }, [handleDelete]);

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/list/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    const data = await response.json();

    if (response.status === 200) {
      setList(data);
    } else if (response.statusText === "Unauthorized") {
      logoutUser();
    }
  };

  return (
    <Container>
      <ContentHeader title="Dashboard">
        <ActionButton onClick={() => setAddModal(true)}>
          Add new Car
        </ActionButton>
        {isOpen && (
          <Modal id={"edit-modal"} setIsOpen={setIsOpen} title={"Edit Details"}>
            <ModalContent>
              {list.map((items: any) => {
                if (id === items.id)
                  return (
                    <Form
                      key={items.id}
                      title={items.title}
                      description={items.description}
                      car_model={items.car_model}
                      color={items.color}
                      year_of_manufacture={items.year_of_manufacture}
                      fuel_tank_capacity={items.fuel_tank_capacity}
                      engine_code={items.engine_code}
                      mileage={items.mileage}
                      registration_date={items.registration_date}
                      button={false}
                    />
                  );
              })}
            </ModalContent>
          </Modal>
        )}
        {addModal && (
          <Modal id={"add-modal"} setIsOpen={setAddModal} title={"Add New Car"}>
            <ModalContent>
              <Form
                title={carInfo.title}
                description={carInfo.description}
                car_model={carInfo.car_model}
                color={carInfo.color}
                year_of_manufacture={carInfo.year_of_manufacture}
                fuel_tank_capacity={carInfo.fuel_tank_capacity}
                engine_code={carInfo.engine_code}
                mileage={carInfo.mileage}
                registration_date={carInfo.registration_date}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                button={true}
              />
            </ModalContent>
          </Modal>
        )}
      </ContentHeader>
      <Content>
        {list.map((item) => (
          <Card key={item.id} title={item.title}>
            <Description>
              <DescriptionType>Description: {item.description}</DescriptionType>
              <DescriptionType>Model: {item.car_model} </DescriptionType>
              <DescriptionType>Color: {item.color} </DescriptionType>
              <DescriptionType>
                Year of manufacture: {item.year_of_manufacture}
              </DescriptionType>
              <DescriptionType>Engine code: {item.engine_code}</DescriptionType>
              <DescriptionType>mileage: {item.mileage} </DescriptionType>
              <DescriptionType>
                Fuel Tank Capacity: {item.fuel_tank_capacity}
              </DescriptionType>
              <DescriptionType>
                Registration Date: {item.registration_date}
              </DescriptionType>
            </Description>
            <Footer>
              <ActionButton
                onClick={() => {
                  handleEdit(item.id);
                }}
              >
                View
              </ActionButton>
              <ActionButton
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                Delete
              </ActionButton>
            </Footer>
          </Card>
        ))}
      </Content>
    </Container>
  );
};
export default Dashboard;
