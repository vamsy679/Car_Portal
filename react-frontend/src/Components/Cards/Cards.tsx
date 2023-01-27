import React from "react";
import { Title, Container } from "./Cards.styles";

interface CardProps {
  id?: string;
  title?: string;
  description?: string;
  children?: any;
}

const Card = ({ id, title, description, children }: CardProps) => (
  <Container id={id}>
    <Title>{title}</Title>
    {children}
  </Container>
);
export default Card;
