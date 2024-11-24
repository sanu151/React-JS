import "./App.css";
import NewStudent from "./components/NewStudent";
import Students from "./components/Students";
import StudentsProvider from "./contexts/StudentsProvider";

function App() {
  return (
    <>
      <StudentsProvider>
        <h1>Students List</h1>
        <NewStudent />
        <Students />
      </StudentsProvider>
    </>
  );
}

export default App;
