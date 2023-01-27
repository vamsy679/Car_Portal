import React from "react";
import { Button } from "../../Components/Button/Button";
interface IAnswerOptions {
  id: string;
  label: string;
  score: number;
  icon?: JSX.Element;
  active?: boolean;
  onClick?: () => void;
}

export const AnswerOptions = ({
  id,
  label,
  score,
  active,
  icon,
  onClick,
}: IAnswerOptions) => {
  return (
    <React.Fragment>
      <Button
        key={id}
        value={score}
        rounded
        isActive={active}
        style={{
          marginRight: 10,
          display: "flex",
          alignItems: "center",
        }}
        icon={icon}
        iconPosition="right"
        onClick={onClick}
      >
        {label}
      </Button>
    </React.Fragment>
  );
};
