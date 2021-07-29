import React ,{useContext} from 'react';
import Topbar from './Components/topbar/Topbar';
import Register from './pages/register/Register';
import Home from './pages/home_page/Home'
import Login from './pages/login/Login'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Context } from './context/Context';
function App() {
  const {user} = useContext(Context);
  return (
    <Router>
      <div>
        <Topbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/login' component={user ? Home : Login}/>
          <Route  path='/register' component={user ? Home : Register}/>
          <Route  path='/settings' component={user ? Settings : Register}/>
          <Route  path='/post/:postId' component={Single}/>
          <Route  path='/write' component={user ? Write : Register}/>
        </Switch>   
    </div>
    </Router>
    
  );
}

export default App;
