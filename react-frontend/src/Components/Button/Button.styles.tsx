import styled, { css } from "styled-components";
import { TButton } from "./Button.types";

const Disabled = css`
  cursor: not-allowed;
  background-color: #d4d4d4;
  color: #f5f5f5;
  &:hover {
    background-color: #d4d4d4;
  }
`;
const Transparent = css`
  background-color: transparent;
  box-shadow: 0 0 10px transparent;
  color: #55dfb2;
  border: none;
  &:hover {
    background-color: transparent;
    color: #55dfb2;
  }
`;
const Active = css`
  background-color: #4acda2;
  box-shadow: 0 0 10px transparent;
  color: white;
  border: none;
`;

const Rounded = css`
  border-radius: 50px;
`;

export const Container = styled.button<TButton>`
  border-radius: 10px;
  border: 1px solid;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 15px 60px;
  background-color: transparent;
  color: #55dfb2;
  position: relative;
  &:hover {
    color: white;
    opacity: 0.9;
    transform: scale(0.98);
    background: #4acda2;
  }
  ${(props) => props.disabled && Disabled}
  ${(props) => props.transparent && Transparent}
	${(props) => props.isActive && Active}
  ${(props) => props.rounded && Rounded}
  ${(props) =>
    props.color &&
    css`
      background: #4acda2;
      color: white;
    `}
`;
export const IconContent = styled.span<TButton & { hasText: boolean }>`
  width: 24px;
  height: 24px;

  ${({ iconPosition, hasText }) =>
    hasText &&
    (iconPosition === `right`
      ? `margin-left: 10px; position: absolute;
    right: 18px;`
      : `margin-right: 10px`)}
`;
