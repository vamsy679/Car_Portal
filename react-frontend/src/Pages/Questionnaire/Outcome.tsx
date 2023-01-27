import React from "react";

interface IOutcomeProps {
  id: string | undefined;
  label: string | undefined;
}

export const Outcome = ({ id, label }: IOutcomeProps) => {
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column" }} id={id}>
        <h1 style={{ marginBottom: "revert" }}>
          Thank you for answering! Here is the result
        </h1>
        <p style={{ fontSize: 16 }}>{label}</p>
      </div>
    </React.Fragment>
  );
};
