import Component2 from "./Component2";
import { MyContext } from "../HOOKS/UserComponent";

const Component1 = () => {
  const user = {
    id: 1,
    name: "Supriyo Das",
    dept: "Plant",
    desig: "Manager",
  };
  return (
    <MyContext.Provider value={user}>
      <Component2 />
    </MyContext.Provider>
  );
};

export default Component1;
