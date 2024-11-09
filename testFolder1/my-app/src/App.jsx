import { useEffect, useState } from "react";
import useFetch from "./components/Hooks/useFetch";
import Users from "./components/Users";
import Search from "./components/Search";

function App() {
  const loadingMessage = <p>Loading ...</p>;
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  const removeUser = (id) => {
    const filteredUsers = users.filter((user) => user.id !== id);
    setUsers(filteredUsers);
  };

  const handleSearch = (searchText) => {
    const value = searchText.toLowerCase();
    const newUsersList = data.filter((user) => {
      const newUser = user.name.toLowerCase();
      return newUser.startsWith(value);
    });
    setUsers(newUsersList);
  };

  return (
    <>
      <div>
        <h1>Client Management</h1>
        <Search onHandleSearch={handleSearch} />
        {isLoading ? (
          loadingMessage
        ) : error ? (
          error
        ) : (
          <Users users={users} onRemoveUser={removeUser} />
        )}
      </div>
    </>
  );
}

export default App;
