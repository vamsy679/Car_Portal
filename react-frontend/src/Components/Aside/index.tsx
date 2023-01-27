import React, { useContext } from "react";

import {
  Container,
  Header,
  Title,
  MenuContainer,
  MenuItemLink,
  Footer,
  UserTitle,
} from "./styles";
import { CarIcon } from "../../Components/Icons/Icon";

import {
  MdDashboard,
  MdSearch,
  MdQuestionAnswer,
  MdSettings,
  MdKeyboardArrowRight,
} from "react-icons/md";

import LogoSvg from "../../assets/logo.svg";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Aside: React.FC = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <Container>
      <Header>
        <CarIcon width={30} height={30} />
        <Title>CarPortal</Title>
      </Header>
      <UserTitle>Welcome, {user.username}</UserTitle>
      <MenuContainer>
        <MenuItemLink>
          <MdDashboard />
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/dashboard"
          >
            Home
          </Link>
        </MenuItemLink>
        <MenuItemLink href="/questionaire">
          <MdQuestionAnswer />
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/questionaire"
          >
            Questionnaire
          </Link>
        </MenuItemLink>
      </MenuContainer>
      <Footer>
        <MenuContainer>
          <MenuItemLink onClick={logoutUser}>
            <MdKeyboardArrowRight />
            Log Out
          </MenuItemLink>
        </MenuContainer>
      </Footer>
    </Container>
  );
};

export default Aside;
