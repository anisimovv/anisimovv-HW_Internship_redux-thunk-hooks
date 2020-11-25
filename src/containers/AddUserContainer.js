import React, { Component } from "react";
import { connect } from "react-redux";

import { addUser, changeName, handleFormChange } from "../actions/actions";

import AddUserForm from "../components/AddUserForm/AddUserForm";

class AddUserContainer extends Component {
  state = {
    id: null,
    name: "",
    surName: "",
    gender: "male",
  };

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.props.handleFormInputChange({ [name]: value });
  };

  handleSubmit = () => {
    this.props.addUser(this.props.formData);

    this.props.handleFormInputChange({
      id: null,
      name: "",
      surName: "",
      gender: "male",
    });
  };

  render() {
    return (
      <AddUserForm
        formData={this.props.formData}
        onInputChange={this.handleInputChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  formData: state.formData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleFormInputChange: (formData) => dispatch(handleFormChange(formData)),
    addUser: (userData) => dispatch(addUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
