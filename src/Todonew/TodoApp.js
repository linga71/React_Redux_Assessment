import React from 'react';
import '../styles/App.css'
import Addtask from './Addtask';
import Demo from "../mock/Mock"


  class App extends React.Component {
  state = {
    todos: [],
  }
  addtodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos: todos,
      })
  }  
   render(){
      return(
        <figure className="position-relative">     
        <div className="div_class">
        <h2 >{this.props.Content.heading} </h2><br/><br/>
        <div >
       <Addtask addtodo={this.addtodo} />
    </div>
     </div>
     </figure>
    );
      }
  }
  App.defaultProps={Content: Demo}
  export default App;