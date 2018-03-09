import React, { Component } from 'react';
import { Route } from 'react-router'
import About from './About';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" component={Main}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Footer />
      </div>
    );
  }
}

export default App;
