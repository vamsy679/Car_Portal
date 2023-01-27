import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Container = styled.div`
  width: 650px;
  height: 500px;
  background-color: #292929;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding: 15px;
  overflow: hidden;
  border-radius: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-items: center;
  padding: 10px;
  justify-content: space-evenly;
`;
export const ButtonContiner = styled.footer`
  width: 100%;
`;

export const ContentContainer = styled.footer`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
`;
