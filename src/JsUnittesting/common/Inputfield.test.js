import { shallow } from 'enzyme';
import Enzyme from'enzyme';
import TodoInput from '../../Todonew/common/Inputfield'
import Adapter from 'enzyme-adapter-react-16';
 Enzyme.configure({adapter: new Adapter()});
 
describe('render < TodoInput /> component', () => {

  it('should render an  input tag', () => {
    const wrapper = shallow(<TodoInput />);
    expect(wrapper.find('input').exists()).toBe(true);
  });
});