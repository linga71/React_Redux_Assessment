
import React from 'react';
import { shallow, mount ,configure} from 'enzyme';
import Routes from '../App';
import { Route } from 'react-router-dom';
import App from '../App'
import Poki from '../Poki/components/Poki'
import TodoApp from '../Todonew/TodoApp';
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});



let pathMap = {};

describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<Routes/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
        const routeProps = route.props();
        pathMap[routeProps.path] = routeProps.component;
        return pathMap;
      }, {});
      console.log(pathMap)
  })

  it("should render my component", () => {
    const wrapper = shallow(<App />);
  });

  it('should show News Feed component for /news router', () => {
    expect(pathMap['/Poki']).toBe(Poki);
  })
  it('should show News Feed component techdomain for /news router', () => {
    expect(pathMap['/Todonew/TodoApp']).toBe(TodoApp);
  })
})
