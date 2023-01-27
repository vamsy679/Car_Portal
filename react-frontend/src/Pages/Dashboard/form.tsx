import React from "react";
import { Input } from "../../Components/Input/Input";
import { FormContiner, InputContainer, InputTitle } from "./styles";
import { ActionContiner, DeleteButton } from "../../Components/Modal/styles";

interface FormProps {
  title: string;
  description: string;
  car_model: string;
  color: string;
  year_of_manufacture: string;
  fuel_tank_capacity: string;
  engine_code: string;
  mileage: string;
  registration_date: string;
  handleChange?: (id?: any) => void;
  handleSubmit?: () => void;
  button?: boolean;
}
const Form = ({
  title,
  description,
  car_model,
  color,
  year_of_manufacture,
  fuel_tank_capacity,
  engine_code,
  mileage,
  registration_date,
  handleSubmit,
  handleChange,
  button,
}: FormProps) => {
  return (
    <form onSubmit={handleSubmit}>
      <FormContiner>
        <InputContainer>
          <InputTitle>Title</InputTitle>
          <Input
            name="title"
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            required
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Description</InputTitle>
          <Input
            name="description"
            id="description"
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Car Model</InputTitle>
          <Input
            name="car_model"
            id="car_model"
            type="text"
            placeholder="Car model"
            value={car_model}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <InputTitle>Colour</InputTitle>
          <Input
            name="color"
            id="color"
            type="text"
            placeholder="Color"
            value={color}
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <InputTitle>Year of Manufacture</InputTitle>
          <Input
            name="year_of_manufacture"
            id="year_of_manufacture"
            type="text"
            placeholder="Year of manufacture"
            value={year_of_manufacture}
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <InputTitle>Fuel Tank Capacity</InputTitle>
          <Input
            name="fuel_tank_capacity"
            id="fuel_tank_capacity"
            type="text"
            placeholder="Fuel tank capacity"
            value={fuel_tank_capacity}
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <InputTitle>Engine Code</InputTitle>
          <Input
            name="engine_code"
            id="engine_code"
            type="text"
            placeholder="Engine code"
            value={engine_code}
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <InputTitle>Mileage</InputTitle>
          <Input
            name="mileage"
            id="mileage"
            type="text"
            placeholder="Mileage"
            value={mileage}
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <InputTitle>Registration Date</InputTitle>
          <Input
            name="registration_date"
            id="registration_date"
            type="text"
            placeholder="Registration date"
            value={registration_date}
            onChange={handleChange}
          />
        </InputContainer>
      </FormContiner>
      <ActionContiner>
        {button ? <DeleteButton type="submit">Submit</DeleteButton> : null}
      </ActionContiner>
    </form>
  );
};
export default Form;
