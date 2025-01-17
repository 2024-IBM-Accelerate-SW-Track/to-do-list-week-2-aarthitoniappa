import React, { Component } from "react";
import { Button, TextField } from "@mui/material";

class AddTodo extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      date: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      content: event.target.value,
      date: new Date().toLocaleString('en-US'),
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.content.trim()) {
      this.props.addTodo({
        content: this.state.content,
        date: this.state.date,
      });
      this.setState({
        content: "",
        date: "",
      });
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <TextField
          label="Add New Item"
          variant="outlined"
          onChange={this.handleChange}
          value={this.state.content}
          style={{ flexGrow: 1 }}
          data-testid="new-item-textfield"
        />
        <Button
          style={{ marginLeft: '10px' }}
          onClick={this.handleSubmit}
          variant="contained"
          color="primary"
          data-testid="new-item-button"
        >
          Add
        </Button>
      </form>
    );
  }
}

export default AddTodo;
