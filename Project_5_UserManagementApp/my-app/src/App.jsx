import "./App.css";
import Users from "./components/Users";
import NewUser from "./components/NewUser";
import UserProvider from "./contexts/UserProvider";

function App() {
  return (
    <UserProvider>
      <h1>User Management App</h1>
      <NewUser />
      <Users />
    </UserProvider>
  );
}

export default App;
