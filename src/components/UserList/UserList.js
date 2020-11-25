import React from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";

const UserList = ({ users }) => {
  return (
    <List>
      {users &&
        users.map(({ id, name, surName, gender }) => (
          <ListItem key={id}>
            <ListItemAvatar>
              <Avatar>{name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={`${name} ${surName}`}
              secondary={`gender - ${gender}`}
            />
          </ListItem>
        ))}
    </List>
  );
};

export default UserList;
