import NewTodo from "./components/NewTodo";
import Todo from "./components/Todo";

function App() {
  const handleChildData = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <h1>More on State Lifting</h1>
        <Todo title={"Todo Data From Parent(App.jsx) to Child(Todo.jsx)"} />
        <NewTodo onHandleChildData={handleChildData} />
      </div>
    </>
  );
}

export default App;
