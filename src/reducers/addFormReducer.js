import { act } from "react-dom/test-utils";

const initialState = {
  id: null,
  name: "",
  surName: "",
  gender: "male",
};

export const addFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_FORM_CHANGE":
      return {...state, ...action.payload};

    default:
      return state;
  }
};
