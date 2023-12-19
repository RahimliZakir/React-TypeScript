import React from "react";

type RandomNumberProps = {
  value: number;
  //* Props kimi gonderilende true yazmaq mecburiyyeti olmayacaq
  isPositive?: boolean;
  isNegative?: boolean;
  isZero?: boolean;
};

const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div className="text-center">
      <p>{value}</p>
      <p>
        {isPositive && "positive"}
        {isNegative && ",  negative"}
        {isZero && ", zero"}.
      </p>
    </div>
  );
};

export default RandomNumber;
