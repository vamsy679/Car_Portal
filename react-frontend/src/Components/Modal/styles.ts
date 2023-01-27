import styled from "styled-components";

export const ContainerdarkBG = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  z-index: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`;

export const ContainerCentered = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalView = styled.div`
  background: #292929;
  width: 650px;
  height: 680px;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  overflow: auto;
`;

export const ModalHeader = styled.div`
  background: #343434;
  color: white;
  overflow: hidden;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const Heading = styled.div`
  margin: 0;
  padding: 15px;
  color: white;
  font-weight: 500;
  font-size: 18px;
  text-align: center;
`;

export const ModalContent = styled.div`
  padding: 10px;
  font-size: 14px;
  color: white;
  text-align: center;
`;

export const ModalActions = styled.div`
  position: absolute;
  bottom: 2px;
  margin-bottom: 10px;
  width: 100%;
`;

export const ActionContiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const CloseButton = styled.div`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
`;

export const DeleteButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 15px;
  border: none;
  color: #fff;
  background: #ff3e4e;
  transition: all 0.25s ease;
`;
