import React from "react";
import {
  CloseButton,
  ContainerCentered,
  ContainerdarkBG,
  ActionContiner,
  ModalView,
  ModalActions,
  ModalContent,
  ModalHeader,
  Heading,
} from "./styles";
import { MdClose } from "react-icons/md";

interface ModalProps {
  setIsOpen: any;
  title?: any;
  children?: any;
  id: string;
}
const Modal = ({ setIsOpen, title, children, id }: ModalProps) => {
  return (
    <>
      <ContainerdarkBG id={id} onClick={() => setIsOpen(false)} />
      <ContainerCentered>
        <ModalView>
          <ModalHeader>
            <Heading>{title}</Heading>
          </ModalHeader>
          <CloseButton onClick={() => setIsOpen(false)}>
            <MdClose />
          </CloseButton>
          <ModalContent>{children}</ModalContent>
        </ModalView>
      </ContainerCentered>
    </>
  );
};

export default Modal;
