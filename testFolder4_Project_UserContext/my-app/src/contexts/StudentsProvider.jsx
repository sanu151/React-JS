import { useState } from "react";
import { StudentContext } from "./StudentsContext";
import PropTypes from "prop-types";

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Supriyo Das",
      gender: "male",
      cls: 5,
      sec: "A",
      roll: 202405010001,
    },
    {
      id: 2,
      name: "Rupa Das",
      gender: "female",
      cls: 5,
      sec: "A",
      roll: 202405010002,
    },
  ]);
  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
};
StudentsProvider.propTypes = {
  children: PropTypes.any,
};

export default StudentsProvider;
