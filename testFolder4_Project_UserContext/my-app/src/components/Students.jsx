import Student from "./Student";
import useStudentContext from "../hooks/useStudentContext";

const Students = () => {
  const { students } = useStudentContext();
  return (
    <div className="card-container">
      {students.map((student) => (
        <Student key={student.id} student={student} />
      ))}
    </div>
  );
};

export default Students;
