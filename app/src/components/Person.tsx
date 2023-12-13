import React from "react";

type PersonName = {
  firstName: string;
  lastName: string;
};

type PersonProps = {
  fullName: PersonName;
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
