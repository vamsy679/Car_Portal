import React from "react";
import { Bar, Container } from "./ProgressBar.styles";
export interface IProgressBar {
  width?: number;
}

export const ProgressBar = ({ width }: IProgressBar) => {
  return (
    <Container {...{ width }}>
      <Bar />
    </Container>
  );
};
