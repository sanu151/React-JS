import { useContext } from "react";
import { StudentContext } from "../contexts/StudentsContext";

const useStudentContext = () => {
  return useContext(StudentContext);
};

export default useStudentContext;
