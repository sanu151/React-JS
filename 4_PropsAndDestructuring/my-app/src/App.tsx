import Card from "./components/Card";
function App() {
  return (
    <>
      <div>
        <h1 className="heading-style">Card Demo App</h1>
        <Card
          cardTitle="HTML"
          cardId="101"
          cardDesc="HTML (HyperText Markup Language) is the foundation of web pages, defining the structure and content. It uses tags to organize elements like headings, paragraphs, images, and links"
        />
        <Card
          cardTitle="CSS"
          cardId="102"
          cardDesc="CSS (Cascading Style Sheets) styles HTML elements, controlling their appearance, layout, and formatting. It uses properties and values to set attributes like colors, fonts, margins, and positioning."
        />
        <Card
          cardTitle="JavaScript"
          cardId="103"
          cardDesc="JavaScript is a programming language that adds interactivity to web pages. It can manipulate HTML elements, handle user interactions, and perform calculations. "
        />
      </div>
    </>
  );
}

export default App;
