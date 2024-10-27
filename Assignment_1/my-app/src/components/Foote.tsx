import React from "react";
import "../../public/SCSS/foote.css";

function Foote(props: { reservation: string; myemail: string }) {
  const { reservation, myemail } = props;
  return (
    <div className="foote">
      <p>{reservation}</p>
      <p>{myemail}</p>
    </div>
  );
}

export default Foote;
