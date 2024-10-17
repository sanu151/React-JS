import React from "react";

function Result(props: {
  studentId: number;
  name: string;
  math: number;
  science: number;
  english: number;
}) {
  const { studentId, name, math, science, english } = props;
  const total: number = math + science + english;
  const avg: number = Number(((total / 300) * 100).toFixed(2));
  const grade: string =
    avg > 80 ? "A" : avg > 60 ? "B" : avg > 40 ? "C" : avg > 30 ? "D" : "F";

  return (
    <div>
      <tr>
        <td>{studentId}</td>
        <td>{name}</td>
        <td>{math}</td>
        <td>{science}</td>
        <td>{english}</td>
        <td>{total}</td>
        <td>{avg}</td>
        <td>{grade}</td>
      </tr>
    </div>
  );
}

export default Result;
