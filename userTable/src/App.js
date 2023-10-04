import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";
function App() {
  const [users, setUsers] = useState([]);

  const addUser = (e, firstName, lastName, birthDate) => {
    e.preventDefault();
    setUsers([
      ...users,
      {
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
      },
    ]);
  };

  return (
    <main>
      <Table users={users} setUsers={setUsers} />
      <Form addUser={addUser} />
    </main>
  );
}

export default App;
