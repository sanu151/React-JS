import { useEffect, useState } from "react";

import Search from "./components/Search";
import Users from "./components/Users";
import useFetch from "./hook/useFetch";

const App = () => {
  // Task 2: use custom hook

  // get data, error, isLoading states from custom hook here
  // use url: 'https://jsonplaceholder.typicode.com/users'
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(data);
  }, [data]);

  // Task 3: delete user
  // get the id from User.js
  const handleDeleteUser = (id) => {
    const newUsers = data.filter((user) => user.id !== id);
    setUsers(newUsers);
  };

  // Task 4: search user
  // get the text from Search.js
  const handleSearch = (searchText) => {
    let value = searchText.toLowerCase();
    const newUsersList = data.filter((user) => {
      const newList = user.name.toLowerCase();
      return newList.startsWith(value);
    });
    setUsers(newUsersList);
  };

  return (
    <div className="container">
      <h1 className="title">Users Management App</h1>
      {isLoading && <p>Loading users...</p>}
      {error && <p>{error}</p>}
      {/* Needs to pass functions from here for state lifting  */}
      <Search onHandleSearch={handleSearch} />
      {!isLoading && !error && (
        <Users users={users} onHandleDeleteUser={handleDeleteUser} />
      )}
    </div>
  );
};

export default App;
