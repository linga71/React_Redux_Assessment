  
import React,{Component} from "react";
import { connect } from 'react-redux';
import fetchAbilities from '../actions/action';
import DropDown from './DropDown';

export class Multidrop extends Component {
 
  componentDidMount() {
    this.setpokemon(this.props.Content.regions[0].ability.name);
  }
  setpokemon(name) {
    this.props.fetchAbilities(name);
  }
  render() {
    return (
        <div id = "multidrop" style ={{border:"solid 2px red",width:"400px",backgroundColor:"#88cc00"}}>
          <label id = "label1" style ={{color:'black'}}> Select pokemon : </label>  &nbsp; 
          <DropDown handleOnChange={(name) => this.setpokemon(name)} dropdownvalues={this.props.Content.regions} /> 
          <br/> <br/>
          <label id = "label2" style ={{color:'black'}}> Select abilities : </label>  &nbsp;  &nbsp;  
          <DropDown dropdownvalues={this.props.result} />
          {this.props.error && <p style={{ textAlign: 'center', color: 'red' }}> Can't retrieve data from api </p>}
        </div>
     
       
    )
  }
}
export const mapStateToProps = (state) => {
  return {
    result: state.event.result,
    error: state.event.error,
  };
};
export const mapsDispatchToProps = (dispatch) => ({
  fetchAbilities: (name) => dispatch(fetchAbilities(name))
});
export default connect(mapStateToProps, mapsDispatchToProps)(Multidrop);