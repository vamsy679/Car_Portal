import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";

export default function () {
  const [list, setList] = useState<any[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [isEditing, setIsEdititng] = useState(false);
  const [id, setID] = useState("");
  const { authTokens, logoutUser, user } = useContext(AuthContext);

  const [carInfo, setCarInfo] = useState({
    user: user,
    title: "",
    description: "",
    car_model: "",
    color: "",
    year_of_manufacture: "",
    fuel_tank_capacity: "",
    engine_code: "",
    mileage: "",
    registration_date: "",
  });
  const handleDelete = (id: any) => {
    console.log("Adding...");

    fetch(`http://127.0.0.1:8000/api/delete/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
  };
  const handleChange = (event: any) => {
    setCarInfo({ ...carInfo, [event.target.name]: event.target.value });
  };

  const handleEdit = (id: any) => {
    setIsOpen(true);
    setID(id);
    console.log("id", id);
  };
  const handleSubmit = () => {
    // prevents the submit button from refreshing the page
    // event.preventDefault();
    console.log("11", carInfo);
    fetch("http://127.0.0.1:8000/api/add-car/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        user: user,
        title: carInfo.title,
        description: carInfo.description,
        car_model: carInfo.car_model,
        color: carInfo.color,
        year_of_manufacture: carInfo.year_of_manufacture,
        fuel_tank_capacity: carInfo.fuel_tank_capacity,
        engine_code: carInfo.engine_code,
        mileage: carInfo.mileage,
        registration_date: carInfo.registration_date,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("11", data);
      });
    setCarInfo({
      user: user,
      title: "",
      description: "",
      car_model: "",
      color: "",
      year_of_manufacture: "",
      fuel_tank_capacity: "",
      engine_code: "",
      mileage: "",
      registration_date: "",
    });
  };

  return {
    list,
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
  };
}
