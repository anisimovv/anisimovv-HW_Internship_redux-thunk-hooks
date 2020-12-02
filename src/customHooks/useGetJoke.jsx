import { useState, useEffect } from "react";

export const useGetJoke = () => {
  const [joke, setJoke] = useState("");

  const getNewJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((joke) => {
        setJoke(joke.value);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getNewJoke();
  }, []);

  return [joke, getNewJoke];
};
