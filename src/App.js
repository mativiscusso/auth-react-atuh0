import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Home from './components/Home'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
            </Switch>
        </Router>
    );
}

export default App;
