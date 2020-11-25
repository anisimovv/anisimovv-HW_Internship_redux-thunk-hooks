const initState = {
  message: "",
  isVisible: false,
};

export const notificationReducer = (state = initState, action) => {
  switch (action.type) {
    case "SHOW_SUCCESS_MESSAGE":
      return { message: action.payload, isVisible: true };

    case "HIDE_NOTIFICATION":
      return { message: "", isVisible: false };

    default:
      return state;
  }
};
