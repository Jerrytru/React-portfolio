import React, { Component } from 'react';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import 'bulma/css/bulma.min.css';

class App extends Component {
  render() {
    return (
      <div className="hero is-fullheight">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
