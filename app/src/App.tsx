import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";

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
    <div className="App">
      <Greet name="Zakir" messageCount={13} isLoggedIn={true} />
      <Person fullName={personName} />
      <PersonList fullNames={personNameList}/>
    </div>
  );
};

export default App;
