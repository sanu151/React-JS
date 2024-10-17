import React from "react";
declare module "uuid";
import { v4 as uuidv4 } from "uuid";

interface ListData {
  id: string;
  title: string;
  desc: string;
}

const list: ListData[] = [
  {
    id: uuidv4(),
    title: "Title 1",
    desc: "This is Description 1",
  },
  {
    id: uuidv4(),
    title: "Title 2",
    desc: "This is Description 2",
  },
  {
    id: uuidv4(),
    title: "Title 3",
    desc: "This is Description 3",
  },
  {
    id: uuidv4(),
    title: "Title 4",
    desc: "This is Description 4",
  },
  {
    id: uuidv4(),
    title: "Title 5",
    desc: "This is Description 5",
  },
];

function List() {
  return (
    <div className="list-div">
      {list.map((item) => {
        const { id, title, desc } = item;
        const color: string[] = [
          "red",
          "yellow",
          "blue",
          "green",
          "orange",
          "purple",
          "pink",
        ];
        const randomNumber: number = Math.floor(Math.random() * color.length);
        return (
          <div
            key={id}
            className="item-div"
            style={{ backgroundColor: color[randomNumber] }}
          >
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        );
      })}
    </div>
  );
}

export default List;
