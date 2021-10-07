import Enzyme, { shallow } from "enzyme";

import Dropdown from '../../Poki/components/DropDown'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
describe("passing props", () => {
  let props = {
    Content: {
      heading: "Select Ability based on Pokemon",
      label2: "Select Ability",
      label1: "Select Pokemon",
      
    },
    handleDropdownChange: (fn) => fn,
    handleOnChange: (fn) => fn,
    dropdownvalues: [{ name: "pokemon values" }],
  };
  it("should call handleonChange method", () => {
    const wrapper = shallow(<Dropdown {...props} dropdownvalues={[]}/>);
    const para = wrapper.find('select').at(0);
    para.simulate('change',{target:{value:"Pokemon"}});
    expect(wrapper.find("handleDropdownChange")).toBeCalled;
  });
})



































/*import DropDown from "../components/DropDown";
import { shallow ,configure} from "enzyme";
import { Dropdown } from "bootstrap";
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});
describe('passing props', () => {

  let props = {
    content: {
      heading: "Pokemon",
      regions: [
        {
            "ability":
            {     
              "name": "charmeleon",               
            }
          },         
          {
            "ability": 
            {
              "name": "bulbasaur",          
            }
          },          
        {    
            "ability": 
            {     
              "name": "squirtle",                  
            }
          },       
          {     
            "ability": 
            { 
              "name": "weedle",         
            }
          }]
    },
    handleOnChange: fn => fn,
    handleDropdownChange: fn => fn,
    dropdown: [{ id: "Region values" }]
  }
it('should call handleOnChange method', () =>
{
    const wrapper = shallow(<Dropdown {...props}/>);
    expect(wrapper.find('select').simulate('change', {
      preventDefault: fn => fn,
      target: {name: "charmeleon"}
    }));
   expect(wrapper.find('handleOnChange')).toEqual({});
});
})*/