import { useRef } from "react";
import useStudentContext from "../hooks/useStudentContext";

const NewStudent = () => {
  const nameRef = useRef();
  const gnederRef = useRef();
  const clsRef = useRef();
  const secRef = useRef();

  const { dispatch } = useStudentContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: new Date().getTime().toString(),
      name: nameRef.current.value,
      gender: gnederRef.current.value,
      cls: clsRef.current.value,
      sec: secRef.current.value.toUpperCase(),
      roll: `${new Date().getFullYear()}${clsRef.current.value}${
        secRef.current.value
      }${new Date().getTime()}`.toUpperCase(),
    };

    dispatch({ type: "ADD_STUDENT", payload: newStudent });

    nameRef.current.value = "";
    gnederRef.current.value = "";
    clsRef.current.value = "";
    secRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name : </label>
          <input type="text" name="name" id="name" ref={nameRef} required />
        </div>
        <div>
          <label htmlFor="gender">Gender : </label>
          <input type="text" name="gender" id="male" ref={gnederRef} required />
        </div>
        <div>
          <label htmlFor="cls">Class : </label>
          <input type="number" name="cls" id="cls" ref={clsRef} required />
        </div>
        <div>
          <label htmlFor="sec">Section : </label>
          <input type="text" name="sec" id="sec" ref={secRef} required />
        </div>
        <div>
          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
};

export default NewStudent;
