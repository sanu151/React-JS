import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./CSS/search.module.css";

const Search = (props) => {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
  };

  useEffect(() => {
    props.onHandleSearch(searchText);
  }, [searchText]);

  return (
    <div className={style.inputDiv}>
      <input
        type="text"
        placeholder="Search User"
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
};

Search.propTypes = {
  onHandleSearch: PropTypes.func,
};

export default Search;
