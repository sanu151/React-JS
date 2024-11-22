import { useContext } from "react";
import { MyContext } from "../HOOKS/UserComponent";

const Component3 = () => {
  const user = useContext(MyContext);
  const { id, name, dept, desig } = user;
  return (
    <div key={id}>
      <h3>ID : {id}</h3>
      <h1>{name}</h1>
      <p>
        {dept} - {desig}
      </p>
    </div>
  );
};

export default Component3;
