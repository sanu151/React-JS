import PropTypes from "prop-types";
import useStudentContext from "../hooks/useStudentContext";

const Student = ({ student }) => {
  const { id, name, gender, cls, sec, roll } = student;
  const { students, setStudents } = useStudentContext();

  const handleRemove = (id) => {
    const filteredStudents = students.filter((student) => student.id !== id);
    setStudents(filteredStudents);
  };
  return (
    <div className="card">
      <h4>ID : {id} </h4>
      <h2>{name}</h2>
      <h4>Gender : {gender} </h4>
      <h3>
        Class : {cls} || Section : {sec}
      </h3>
      <h3>Roll No : {roll}</h3>
      <div>
        <button onClick={() => handleRemove(id)}>Remove Student</button>
      </div>
    </div>
  );
};
Student.propTypes = {
  student: PropTypes.object,
};

export default Student;
