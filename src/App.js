import React, { Component } from "react";
import "./App.css";
//react-table needed
// import ReactTable from "react-table";
import "react-table/react-table.css";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import DatePicker from "material-ui/DatePicker";
import TableExampleComplex from "./components/mui-table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "", date: {}, todos: [] };
  }

  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  addTodo = event => {
    event.preventDefault();
    const stringDate =
      this.state.date.getDate() +
      "." +
      (this.state.date.getMonth() + 1) +
      "." +
      this.state.date.getFullYear();
    const newTodo = {
      description: this.state.description,
      date: stringDate
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };
  handleChange = (event, date) => {
    this.setState({
      date: date
    });
  };

  render() {

    //data for table
    const todos = this.state.todos;

    return (
      <div className="App">
        <div className="App-header">
          <h2>Simple Todolist</h2>
        </div>
        <div>
        <TextField
              hintText="description"
              name="description"
              onChange={this.inputChanged}
              value={this.state.description}
            />
            <DatePicker
              hintText="Pick Date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <RaisedButton label="Send!" primary={true} onClick={this.addTodo} />
        </div>
        <div>
          <TableExampleComplex data={todos} />
        </div>
      </div>
    );
  }
}

export default App;
