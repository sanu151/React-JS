import React from "react";
import "../css/card.css";

const date: Date = new Date();
const dateDay: number = date.getDay();
const dateMonth: number | string =
  date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const dateYear: number = date.getFullYear();
const fullDate: string = `${dateDay} / ${dateMonth} / ${dateYear}`;

export default function Card(props: {
  cardTitle: string;
  cardId: string;
  cardDesc: string;
}) {
  const { cardTitle, cardId, cardDesc } = props;
  return (
    <div className="card">
      <h1 className="card-title">{cardTitle}</h1>
      <h3 className="card-num">Course ID : {cardId}</h3>
      <p className="card-desc">{cardDesc}</p>
      <p className="card-footer">
        {fullDate} <button className="subscribe-btn">Subscribe</button>
      </p>
    </div>
  );
}
