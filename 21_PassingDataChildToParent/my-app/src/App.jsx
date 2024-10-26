import Child from "./component/Child";

function App() {
  const data = "App : This is from Parent Element";
  const handleData = (childData) => {
    console.log(childData);
  };
  return (
    <>
      <div>
        <h1>Passing Data From Child to Parent Component</h1>
        <Child data={data} onParent={handleData} />
      </div>
    </>
  );
}

export default App;
