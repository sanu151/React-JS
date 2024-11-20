import { useContext } from "react";
import { UserContext } from "../HOOKS/UseContext";

const Component4 = () => {
  const data = useContext(UserContext);
  console.log(data);
  return (
    <div>
      <h1>{data.id}</h1>
      <p>{data.title}</p>
    </div>
  );
};

export default Component4;
