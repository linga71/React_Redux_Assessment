import React, { Component } from 'react';
import Multidrop from './Multidrop'
import Data from '../../mock/Mock';
import './App.css';

class Poki extends Component {
  render() {
    return (
      
      <div className="app"><center>
        <h2 style ={{color:' black',}}>
        {this.props.Content.headings}
        </h2>
        <br/>
        <Multidrop Content={this.props.Content}/></center>
      </div>
      
    );
  }
}

Poki.defaultProps = { Content: Data }
export default Poki;