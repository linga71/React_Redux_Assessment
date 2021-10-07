import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import {Multidrop,mapStateToProps,mapsDispatchToProps} from "../../Poki/components/Multidrop";
Enzyme.configure({ adapter: new Adapter() });

describe("Select Buttons for displaying Pokemon and abilities",()=>{
    const fetchAbilities = function(){
    };
    let props = {
        Content : {
        regions:[ {
            "ability":
            {
            "name": "charmeleon",
          }
          }
        ]},
        setpokemon:fn=>fn,
        fetchAbilities:fn=>fn,
        error:true,
    }
    it( "render the Labels",()=>{
        const wrapper = shallow(<Multidrop {...props} />);
        console.log(wrapper.debug());
        expect(wrapper.find('#multidrop #label1').text()).toBe(' Select pokemon : ')
    })
    it( "render the Dropdown ",()=>{
        const wrapper = shallow(<Multidrop {...props} />);
        const element = wrapper.find('DropDown');
        expect(element.length).toBe(2);
       
    })
    it
    ( "check p element",()=>{
        const wrapper = shallow(<Multidrop {...props} />);
        expect(wrapper.find('p').text()).toBe(" Can't retrieve data from api ")  
    })
    it(" mapDispatchToProps", () => {
        const dispatch = jest.fn();
        mapsDispatchToProps(dispatch).fetchAbilities();
        expect(dispatch.mock.calls[0][0]).toBeCalled;
      });
    it(" map state to props value check", () => {
        const INITIAL_STATE = {
        
        event :{  
              result : '1',
         error : null   
          }};     
        expect(mapStateToProps(INITIAL_STATE).result).toEqual('1');
        expect(mapStateToProps(INITIAL_STATE).error).toEqual(null);
    });
})




























/*import { shallow } from 'enzyme';
import Enzyme from'enzyme';
import Multidrop from './Multidrop';
import Adapter from 'enzyme-adapter-react-16';
 Enzyme.configure({adapter: new Adapter()});

 describe("Multidrop", () => {

 it('renders List component', () => {
    const wrapper = shallow(<Multidrop />);
    expect(wrapper.find(".multidrop").exists()).toBe(true);
 });
 it('renders App components and checks for false case', () => {
    const wrapper = shallow(<Multidrop />);
    expect(wrapper.find(".googler").exists()).toBe(false);
 });

 it('should call deleteItem method', () =>
 {
     const value = {
         target:{
             value:[]
         }
     }
     const wrapper = shallow(<List {...props}/>);
     wrapper.setState({
        //key:"red",
        data:[{key:"blue"}]
    })
     wrapper.instance().deleteItem(value);
     expect(wrapper.state('data')).toEqual([{key:"blue"}]);
 });
 
});
*/