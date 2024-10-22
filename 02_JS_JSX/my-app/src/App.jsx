const todoTitle = "Todo App";
const todoDesc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, vero voluptatibus eius provident maxime aperiam perferendis minus similique. Magnam animi a commodi ipsam suscipit, explicabo sunt sapiente maxime architecto vero earum fugit? Similique, voluptatibus maxime? Est ratione consectetur, quas sed doloremque sint, explicabo alias dolores debitis repellendus soluta suscipit neque!";
const date = new Date();
const dateDay = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const fullDate = `${dateDay} / ${month + 1} / ${year}`;
const headingStyle = {
  backgroundColor: "purple",
  color: "white",
  padding: "15px",
  textAlign: "Center",
};

function App() {
  return (
    <>
      <div>
        <h1 style={headingStyle}>{todoTitle}</h1>
        <p className="desc-para">{todoDesc}</p>
        <p className="date-para">{fullDate}</p>
      </div>
    </>
  );
}

export default App;
