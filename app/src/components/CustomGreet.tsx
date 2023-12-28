import React from "react";
import Greet from "./Greet";

//* "Greet" component-inin "props"-larini extract ede bilirik
const CustomGreet = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      Name {props.name}, is logged in: {props.isLoggedIn.toString()}.
    </div>
  );
};

export default CustomGreet;
