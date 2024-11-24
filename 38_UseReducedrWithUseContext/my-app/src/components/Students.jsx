import Student from "./Student";
import useStudentContext from "../hooks/useStudentContext";

const Students = () => {
  const { state } = useStudentContext();
  return (
    <div className="card-container">
      {state.students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
};

export default Students;
