import React, { Component } from 'react';
import { Route, Redirect } from 'react-router'
import About from './About';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Profile from './Profile'
import Contact from './Contact'

class App extends Component {
  render() {
    let cachedState = localStorage.getItem('mySubmitedData') && (!window.location.pathname == "/profile" || window.location.pathname == "/");
    let redirectToNew = !cachedState && window.location.pathname == "/";
    return (
      <div>
        <Header />
        { cachedState && <Redirect to="/profile"/> }
        { redirectToNew && <Redirect to="/new"/> }
        <Route path="/edit" component={Main}/>
        <Route path="/new" component={Main}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/contact" component={Contact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
