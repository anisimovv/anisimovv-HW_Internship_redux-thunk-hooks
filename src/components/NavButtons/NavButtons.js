import React from "react";
import { Link } from "react-router-dom";
import { Box, ButtonGroup, Button } from "@material-ui/core";

const NavButtons = () => {
  return (
    <Box display="flex" justifyContent="center" my={5}>
      <ButtonGroup fullWidth>
        <Button
          component={Link}
          to="/add-user"
          size="large"
          variant="contained"
        >
          Add User
        </Button>
        <Button
          component={Link}
          to="/user-list"
          size="large"
          variant="contained"
        >
          User List
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default NavButtons;
