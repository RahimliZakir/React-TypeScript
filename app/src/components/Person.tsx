import React from "react";

type PersonProps = {
  fullName: {
    firstName: string;
    lastName: string;
  };
};

const Person = (props: PersonProps) => {
  return (
    <div>
      <h2 className="text-center">
        {props.fullName.firstName} {props.fullName.lastName}.
      </h2>
    </div>
  );
};

export default Person;
