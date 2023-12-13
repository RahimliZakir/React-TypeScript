import React from "react";

//* We can use "interface"-s.
//* But usually we use "type"-s for building applications, "interface"-s for building libraries.
type GreetProps = {
  name: string;
  //* We can set this property optional.
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2 className="text-center">
        {props.isLoggedIn
          ? `Welcome ${props.name}! You have ${props.messageCount} unread messages.`
          : "Welcome Guest."}
      </h2>
    </div>
  );
};

export default Greet;
