import { useEffect, useState } from "react";
import "./app.css";
function App() {
  const [validInput, setValidInput] = useState(true);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    if (inputText.length > 2) {
      setValidInput(true);
    } else {
      setValidInput(false);
    }
  }, [inputText]);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={handleChange}
          className={`${validInput && "valid"}`}
          placeholder="Your Name"
        />
      </div>
      <h2>{inputText}</h2>
    </>
  );
}

export default App;
