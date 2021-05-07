
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Admin from './components/pages/Admin';
import Projects from './components/pages/Projects';
import Profile from './components/pages/Profile';
import Logout from './components/pages/Logout';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Admin' component={Admin} />
        <Route path='/Projects' component={Projects} />
        <Route path='/Profile' component={Profile} />
        <Route path='/Logout' component={Logout} />
      </Switch>
    </Router>
  );
}

export default App;
