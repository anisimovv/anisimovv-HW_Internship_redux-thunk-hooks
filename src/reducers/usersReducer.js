const initialState = [
  {
    id: 0,
    name: "John",
    surName: "Doe",
    gender: "male",
  },
  {
    id: 1,
    name: "Some",
    surName: "Man",
    gender: "male",
  },
];

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];

    default:
      return state;
  }
};
