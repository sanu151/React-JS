import "./App.css";
import Users from "./components/Users";
import useFetch from "./Hooks/useFetch";

function App() {
  const loadingMessage = <p>Loading...</p>;
  const { data, isLoading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = isLoading ? (
    loadingMessage
  ) : error ? (
    error
  ) : (
    <>
      <Users data={data} />
    </>
  );

  return (
    <>
      <h1>User Management Tool</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Contact Number</th>
            <th>Website</th>
            <th>company</th>
          </tr>
        </thead>
        <tbody>{users}</tbody>
      </table>
    </>
  );
}

export default App;
