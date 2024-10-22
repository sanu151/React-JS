import Card from "./components/Card";

function App() {
  return (
    <>
      <div>
        <h1 className="heading-title">Create Card</h1>
        <div className="card-div">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
}

export default App;
