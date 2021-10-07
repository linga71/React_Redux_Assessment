
import { BrowserRouter as Router,Route, Link, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Poki from './Poki/components/Poki'
import store from './Poki/store/store'
import TodoApp from './Todonew/TodoApp'
function App() {
  return (
    <Provider store = {store}> 
    <Router> 
           <div>
            <ul className="App-header">            
         
              <li>  
                <Link  style={{color:'black'}}   to="/Poki"> Pokemon</Link> 
              </li> 
              <li> 
                <Link  style={{color:'black'}}   to="/Todonew/TodoApp"> Todo List</Link> 
              </li> 
             
          
            </ul> 
            <Switch> 
               
              <Route  path='/Poki' component={Poki}></Route> 
              <Route  path='/Todonew/TodoApp' component={TodoApp}></Route>         
           </Switch> 
          </div> 
       </Router>     
       </Provider>  
  );
}
export default App;
