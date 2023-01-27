import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 48%;
  height: 26rem;
  background-color: ${(props) => props.theme.colors.tertiary};
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px 0;
  padding: 30px 20px;
  overflow: hidden;
`;
export const Title = styled.h2`
  color: #fff;
  margin-bottom: 10px;
`;
export const Footer = styled.div`
  display: "flex";
  margin-top: 10px;
`;
export const Date = styled.div`
  color: #ccc;
  font-size: 15px;
  margin: 6px 0;
`;
export const Description = styled.div`
  color: #fff;
  font-size: 15px;
`;
export const DescriptionType = styled.div`
  color: #fff;
  font-size: 15px;
`;

export const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;
