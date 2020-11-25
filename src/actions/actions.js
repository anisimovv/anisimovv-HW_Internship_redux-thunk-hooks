let userId = 1;

export const addUser = (userData) => ({
  type: "ADD_USER",
  payload: { ...userData, id: ++userId },
});

export const handleFormChange = (formData) => ({
  type: "HANDLE_FORM_CHANGE",
  payload: formData,
});

export const showSuccessMessage = (message) => ({
  type: "SHOW_SUCCESS_MESSAGE",
  payload: message,
});

export const hideNotification = {
  type: "HIDE_NOTIFICATION",
};
