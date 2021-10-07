import { shallow } from "enzyme";
 
import React from 'react';
import sinon from "sinon";
import TodoButtons from "../../Todonew/common/Buttons"
import Enzyme from'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 

 Enzyme.configure({adapter: new Adapter()});
describe('Buttons', () => {
  it(' on click it should mockcallback', () => {
    const mockCallBack = sinon.spy();
    const wrapper = shallow(<TodoButtons onClick={mockCallBack} />);
    wrapper.find('button').simulate('click');
    expect(mockCallBack.calledOnce).toBe(true);
  });
});