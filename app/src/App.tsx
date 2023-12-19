import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import LoggedIn from "./components/state/LoggedIn";
import User from "./components/state/User";
import CounterName from "./components/state/CounterName";
import ThemeProvider from "./components/context/ThemeProvider";
import Box from "./components/context/Box";
import MemberContextProvider from "./components/context/MemberContextProvider";
import Member from "./components/context/Member";
import DomRef from "./components/DomRef";
import CounterClass from "./components/class/CounterClass";

const App = () => {
  const personName = {
    firstName: "Zakir",
    lastName: "Rahimli",
  };

  const personNameList = [
    {
      name: "Bruce",
      surname: "Wayne",
    },
    {
      name: "Clark",
      surname: "Kent",
    },
    {
      name: "Princess",
      surname: "Diana",
    },
  ];

  const handleButtonClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log(e, "event");
    console.log(id, "id");
  };

  return (
    <div className="App d-flex flex-column align-items-center">
      {/* Props with Primitive Types */}
      <Greet name="Zakir" /*messageCount={13}*/ isLoggedIn={true} />
      {/* Props with Object Type */}
      <Person fullName={personName} />
      {/* Props with Array Type */}
      <PersonList fullNames={personNameList} />
      {/* Props with Limited Values */}
      <Status status={"success"} />
      {/* Props to get Values as Children */}
      <Heading>This is Heading component.</Heading>
      {/* Props to get Components as Children */}
      <Oscar>
        <Heading>And Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
      {/* Event Props (MouseEvent - HTMLButtonELement) */}
      <Button handleButtonClick={handleButtonClick} />
      {/* Event Props (ChangeEvent - HTMLInputELement) */}
      <Input
        value=""
        handleInputChange={(e) => {
          console.log(e);
        }}
      />
      {/* Style Props */}
      <Container styles={{ border: "1px solid #000", padding: "1rem" }} />
      {/* useState Hook */}
      <LoggedIn />
      {/* useState Future Value & useState Type Assertion */}
      <User />
      {/* useReducer Hook & useReducer Strict Action Types */}
      <CounterName />
      {/* useContext Hook */}
      <ThemeProvider>
        <Box />
      </ThemeProvider>
      {/* useContext Future Value */}
      <MemberContextProvider>
        <Member />
      </MemberContextProvider>
      {/* useRef Hook */}
      <DomRef />
      {/* Class Component */}
      <CounterClass message={"This is class component with tsx."} />
    </div>
  );
};

export default App;
