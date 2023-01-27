import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`;

export const TitleContainer = styled.div`
  > h1 {
    color: ${(props) => props.theme.colors.white};
    &::after {
      content: "";
      display: block;
      width: 5.5rem;
    }
  }
`;

export const Controllers = styled.div`
  display: flex;
`;
