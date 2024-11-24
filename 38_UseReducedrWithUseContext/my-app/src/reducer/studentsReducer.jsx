export const initialState = {
  students: [
    {
      id: 1,
      name: "Supriyo Das",
      gender: "male",
      cls: 5,
      sec: "A",
      roll: 202405010001,
    },
    {
      id: 2,
      name: "Rupa Das",
      gender: "female",
      cls: 5,
      sec: "A",
      roll: 202405010002,
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_STUDENT":
      return {
        ...state,
        students: [...state.students, action.payload],
      };
    case "DELETE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };

    default:
      return state;
  }
};
