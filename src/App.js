import logo from './logo.svg';
import './App.css';
import './Responsive.css';
import Home from './Home';
import Bottomfooter from './Bottomfooter'
import Header  from './Header';
import Login from './Login'
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
     <Header />
      <Switch>
      <Route path="/" exact component={Home}/>
          <Route path="/login" component={Login}/>
    </Switch>
     <Bottomfooter />
     
    </Router>
    </>
  );
}

export default App;
