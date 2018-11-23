import React, { Component } from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import Content from './components/Content';
import Footer from "./components/Footer";


/*
*This is the root component
*/

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
