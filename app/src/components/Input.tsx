import React from "react";

type InputProps = {
  value: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({ value, handleInputChange }) => {
  return (
    <div>
      <input
        value={value}
        onChange={handleInputChange}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
