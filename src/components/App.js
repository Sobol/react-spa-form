import React, { Component } from 'react';
import { Route } from 'react-router'
import About from './About';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Profile from './Profile'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
