import React, { Component } from "react";
import List from "./List";
import '../styles/App.css'
import Demo from "../mock/Mock"
import TodoInput from "./common/Inputfield";
import TodoButtons from "./common/Buttons";


export class Addtask extends Component {
  state = {
    content: "",
    data: [],
    count: 0,
  };
  //handleOnCreate(e) {
   // e.preventDefault();
  //  Promise.resolve(this.props.Addtask(this.state.content)).then(() => {
   //   this.setState({ content : "" });
   // })
 // }
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addtodo(this.state);
    const data = this.state.data;
    const obj = {
      name: this.state.content,
      key: this.state.count,
    };
    data.push(obj);
    this.setState({
      data,
      count: this.state.count + 1,
      content: "",
    });
  };
  render() {
    return (
      <div className="add">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="content"></label>
          <TodoInput id="addtext" placeholder={this.props.Content.enter} content={this.state.content} handleChange={this.handleChange}/><br/>
          <TodoButtons type="submit" name={this.props.Content.addButtonText}/>
        </form><br/>
        <div>
          <List data={this.state.data} />
        </div>
      </div>
    );
  }
}
Addtask.defaultProps = { Content: Demo };
export default Addtask;