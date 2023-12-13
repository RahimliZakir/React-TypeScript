import React from "react";

type ButtonProps = {
  handleButtonClick: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Button = ({ handleButtonClick }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={(e) => handleButtonClick(e, 13)}
        className="btn btn-info"
        type="button"
      >
        Click
      </button>
    </div>
  );
};

export default Button;
