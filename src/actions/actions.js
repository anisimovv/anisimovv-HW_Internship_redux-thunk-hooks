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

const loadJokeData = (payload) => ({
  type: "LOAD_JOKE_DATA",
  payload,
});

const loadJokeStart = () => ({
  type: "LOAD_JOKE_START",
});

const loadJokeSuccess = () => ({
  type: "LOAD_JOKE_SUCCESS",
});

const loadJokeFail = () => ({
  type: "LOAD_JOKE_FAIL",
});

export const loadJoke = () => {
  return (dispatch) => {
    dispatch(loadJokeStart());
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((joke) => {
        dispatch(loadJokeData(joke.value));
        dispatch(loadJokeSuccess());
      })
      .catch((e) => console.log(e));
  };
};
