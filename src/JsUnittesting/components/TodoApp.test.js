import React from 'react';
import { shallow } from 'enzyme';
import App from '../../Todonew/TodoApp'
import Enzyme from'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
describe("Header" , () =>{
  let props ={
      Data : {
        heading:"ToDo List",
        enter:"Enter your Task",
        addButtonText:"Add",
        editButtonText:"Edit",
        deleteButtonText:"Delete",
        popupCancel:"Cancel",
        popupSave:"Save",
        popupHeading:"Edit"
    },
    todos: fn=>fn
  }
  it('renders Header components', () => {
      const wrapper = shallow(<App {...props}/>);
      expect(wrapper.find(".div_class").exists()).toBe(true);
  });
  it('renders Header components and checks for false case', () => {
    const wrapper = shallow(<App {...props}/>);
    expect(wrapper.find(".div11_class").exists()).toBe(false);
  });
  it("should call addtodo", () => {
    const value = {
        todos: fn => fn
    }
    const wrapper = shallow(<App {...props}/>);
    wrapper.instance().addtodo(value);
    expect(wrapper.exists()).toBe(true);
});
});