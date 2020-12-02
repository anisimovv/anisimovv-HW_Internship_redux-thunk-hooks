import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { handleFormChange } from "../../actions/actions";

import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

import TextField from "@material-ui/core/TextField";

import MenuItem from "@material-ui/core/MenuItem";
import { Button, Typography } from "@material-ui/core";
import { useGetJoke } from "../../customHooks/useGetJoke";

const AddUserForm = ({
  // formData,
  onInputChange,
  handleSubmit,
  joke,
  isLoading,
}) => {
  const isButtonDisabled = true;
  // const isButtonDisabled = !(
  //   formData.name.length > 1 && formData.surName.length > 1
  // );

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   console.log(counter);
  //   if (counter > 3) {
  //     fetch("https://api.chucknorris.io/jokes/random")
  //       .then((res) => res.json())
  //       .then((joke) => {
  //         console.log(joke);
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // }, [counter]);

  const [jokeFromHook, getJoke] = useGetJoke();

  useEffect(() => {
    // console.log(jokeFromHook);
  }, [jokeFromHook]);

  // const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [gender, setGender] = useState("");

  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formData);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    
    dispatch(handleFormChange({ [name]: value }))
  };


  return (
    <form noValidate autoComplete="off">
      <Box my={2}>
        <Button onClick={getJoke}>Increase</Button>
        <TextField
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          label="Name"
          placeholder="Enter User Name"
          fullWidth
        />
      </Box>
      <Box my={2}>
        <TextField
          name="surName"
          value={surName}
          onChange={() => console.log("changed")}
          label="Second Name"
          placeholder="Enter User Second Name"
          fullWidth
        />
      </Box>
      <Box my={2}>
        <TextField
          label="Gender"
          name="gender"
          value={gender}
          onChange={() => console.log("changed")}
          fullWidth
          select
        >
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </TextField>
      </Box>
      <Box my={3}>
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="outlined"
          fullWidth
          disabled={isButtonDisabled}
        >
          Add User
        </Button>

        <Box mt={5}>
          {isLoading ? <CircularProgress /> : <Typography>{joke}</Typography>}
        </Box>
      </Box>
    </form>
  );
};

export default AddUserForm;
