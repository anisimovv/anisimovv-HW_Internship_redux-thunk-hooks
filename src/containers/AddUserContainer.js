import React, { Component } from "react";
import { connect } from "react-redux";

import { addUser, handleFormChange, loadJoke } from "../actions/actions";

import AddUserForm from "../components/AddUserForm/AddUserForm";

class AddUserContainer extends Component {
  componentDidMount() {
    this.props.loadJoke();
    console.log(this.props);
  }

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
        joke={this.props.joke}
        isLoading={this.props.isLoading}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  formData: state.formData,
  joke: state.joke.value,
  isLoading: state.joke.isLoading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadJoke: () => dispatch(loadJoke()),
    handleFormInputChange: (formData) => dispatch(handleFormChange(formData)),
    addUser: (userData) => dispatch(addUser(userData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUserContainer);
