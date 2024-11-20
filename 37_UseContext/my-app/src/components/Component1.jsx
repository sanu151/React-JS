import { UserContext } from "../HOOKS/UseContext";
import Component2 from "./Component2";

const Component1 = () => {
  const user = {
    id: 101,
    title: "Supriyo Das",
  };
  return (
    <UserContext.Provider value={user}>
      <Component2 />
    </UserContext.Provider>
  );
};

export default Component1;
