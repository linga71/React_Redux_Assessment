import React, { Component } from "react";
import Data from '../../mock/Mock';

class DropDown extends Component {
    handleDropdownChange(event) {   
        this.props.handleOnChange(event.target.value);  
    }
    render() {
     const dropdownvalues  = this.props.dropdownvalues    
        return (           
              <select class="browser-default custom-select" onChange={(event) => this.handleDropdownChange(event)} >
          {
               dropdownvalues.map(post => {                            
               return <option id = "option">
                {post.ability.name}
              </option> })                                      
            }                  
                </select>
         )}}
DropDown.defaultProps = { Content: Data }
export default DropDown;
