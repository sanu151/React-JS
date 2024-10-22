const cardTitle = "Card Title";
const cardDesc =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam corrupti sit quasi suscipit alias nemo veritatis accusantium cum labore mollitia.";
const date = new Date();
const dateDay = date.getDate();
const dateMonth =
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const dateYear = date.getFullYear();
const cardFooter = `${dateDay} / ${dateMonth} / ${dateYear}`;

function Card() {
  return (
    <div className="card">
      <h3 className="card-title">{cardTitle}</h3>
      <p className="card-desc">{cardDesc}</p>
      <p className="card-footer">Date Today : {cardFooter}</p>
    </div>
  );
}

export default Card;
