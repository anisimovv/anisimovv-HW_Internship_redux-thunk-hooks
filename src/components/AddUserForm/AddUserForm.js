import React from "react";

import Box from "@material-ui/core/Box";

import TextField from "@material-ui/core/TextField";

import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";

const AddUserForm = ({
  formData,
  onInputChange,
  handleSubmit,
}) => {
const isButtonDisabled = !(formData.name.length > 1 && formData.surName.length > 1);

  return (
    <form noValidate autoComplete="off">
      <Box my={2}>
        <TextField
          name="name"
          value={formData.name}
          onChange={onInputChange}
          label="Name"
          placeholder="Enter User Name"
          fullWidth
        />
      </Box>
      <Box my={2}>
        <TextField
          name="surName"
          value={formData.surName}
          onChange={onInputChange}
          label="Second Name"
          placeholder="Enter User Second Name"
          fullWidth
        />
      </Box>
      <Box my={2}>
        <TextField
          label="Gender"
          name="gender"
          value={formData.gender}
          onChange={onInputChange}
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
      </Box>
    </form>
  );
};

export default AddUserForm;
