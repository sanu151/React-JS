import React from "react";

import style from "./CSS/country.module.css";

const Country = (props) => {
  const { name, flags, population, capital, area } = props.country;

  const handleRemoveButton = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <article className={style.country}>
      <div className={style.card}>
        <img className={style.flag} src={flags.png} alt={name.common} />
        <h2>{name.common}</h2>
        <h4>Official Name : {name.official}</h4>
        <h3>Capital : {capital}</h3>
        <p>Area : {area} square kilometers</p>
        <p>Population : {population}</p>
        <button
          className={style.btn}
          onClick={() => {
            handleRemoveButton(name.common);
          }}
        >
          Remove Country
        </button>
      </div>
    </article>
  );
};

export default Country;
