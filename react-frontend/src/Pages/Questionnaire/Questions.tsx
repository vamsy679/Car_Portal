import React from "react";

interface IQuestionProps {
  id: string | undefined;
  label: string | undefined;
}

export const Question = ({ id, label }: IQuestionProps) => {
  return (
    <React.Fragment>
      <div style={{ textAlign: "center" }} id={id}>
        <h1>{label}</h1>
      </div>
    </React.Fragment>
  );
};
