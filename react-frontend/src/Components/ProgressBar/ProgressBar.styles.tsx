import styled from "styled-components";
import { IProgressBar } from "./ProgressBar";

export const Container = styled.div<IProgressBar>`
  width: ${({ width }) => width}%;
  height: 5px;
  background-color: #4acda2;
  border-radius: 5px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Bar = styled.div`
  transition: width 2s ease-out;
  height: 100%;
  background-color: #4acda2;
  border-radius: inherit;
`;
