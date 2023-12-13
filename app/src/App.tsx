import { Stats } from "fs";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";

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
    </div>
  );
};

export default App;