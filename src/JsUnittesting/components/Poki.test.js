import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from'enzyme';
import App from '../../Poki/components/Poki'
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
describe("App poki", () => {
  
  it('renders app component', () => {
    const wrapper = shallow(<App/>);
    expect(wrapper.find(".app").exists()).toBe(true);
});
})