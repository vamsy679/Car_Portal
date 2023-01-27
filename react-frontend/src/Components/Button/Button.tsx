import React from "react";
import { Container, IconContent } from "./Button.styles";
import { TButton } from "./Button.types";

export const Button = ({
  id,
  rounded,
  onClick,
  children,
  transparent,
  disabled,
  isActive,
  iconPosition,
  icon,
  ...rest
}: TButton) => {
  return (
    <Container
      {...{
        id,
        rounded,
        transparent,
        disabled,
        onClick,
        isActive,
        iconPosition,
        icon,
        ...rest,
      }}
    >
      {iconPosition === `left` && (
        <IconContent {...{ iconPosition, hasText: !!children }}>
          {icon}
        </IconContent>
      )}
      {children}
      {iconPosition === `right` && (
        <IconContent {...{ iconPosition, hasText: !!children }}>
          {icon}
        </IconContent>
      )}
    </Container>
  );
};
