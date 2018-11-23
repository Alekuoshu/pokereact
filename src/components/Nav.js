import React, { Component } from 'react';
import './../styles/Nav.css';

/*
*navbar component with pokedex logo
*/
class Nav extends Component {
  render(){
    return(
      <header>
        <nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
              <h1> PokeApp with ReactJS! </h1>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Nav;