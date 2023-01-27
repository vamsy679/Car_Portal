import { ButtonHTMLAttributes } from "react";

export type TButtonProps<T> = T & {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  transparent?: boolean;
  disabled?: boolean;
  id?: string;
  isActive?: boolean;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  rounded?: boolean;
};

export type TButton = TButtonProps<ButtonHTMLAttributes<HTMLButtonElement>>;
