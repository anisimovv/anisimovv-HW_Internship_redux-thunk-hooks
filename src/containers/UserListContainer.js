import React from "react";
import { connect } from "react-redux";

import UserList from "../components/UserList/UserList";

const UserListContainer = ({ userList }) => <UserList users={userList} />;

const mapStateToProps = (state) => ({
  userList: state.users,
});

export default connect(mapStateToProps)(UserListContainer);
