import { useReducer } from "react";
import { StudentContext } from "./StudentsContext";
import PropTypes from "prop-types";
import { initialState, reducer } from "../reducer/studentsReducer";

const StudentsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
StudentsProvider.propTypes = {
  children: PropTypes.any,
};

export default StudentsProvider;
