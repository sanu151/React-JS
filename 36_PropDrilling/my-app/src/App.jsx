import { useState } from "react";
import "./App.css";
import Component1 from "./components/Component1";

function App() {
  const [data] = useState({ id: 101, name: "Supriyo Das" });

  return (
    <>
      <h2>Prop Drilling | App: Generate data form here..</h2>
      <Component1 data={data} />
    </>
  );
}

export default App;
