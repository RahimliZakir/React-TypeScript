import React from "react";

type PersonListProps = {
  fullNames: {
    name: string;
    surname: string;
  }[];
};

//* We can write also like this.
// type PersonListOtherWayObject = {
//   name: string;
//   surname: string;
// };

// type PersonListOtherWayArray = {
//   fullNames: PersonListOtherWayObject[];
// };

//* We can set type also like this.
const PersonList: React.FC<PersonListProps> = (props) => {
  return (
    <div>
      {props.fullNames.map((item, index) => {
        return (
          <p key={index}>
            {item.name} {item.surname}
          </p>
        );
      })}
    </div>
  );
};

export default PersonList;
