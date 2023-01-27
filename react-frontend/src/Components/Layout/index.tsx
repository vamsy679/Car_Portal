import React from "react";
import { Container } from "./styles";

import Aside from "../Aside";
import Content from "../Content";

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Aside />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
