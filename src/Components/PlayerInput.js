import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      completed: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  submit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
    // this.mainInput.value = ""
  }

  render() {
    return (
      <form onSubmit={e => this.submit(e)}>
        <input onChange={e => this.handleChange(e)} />
        <input type="submit" />
      </form>
    );
  }
};

export default Form;
