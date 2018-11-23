import React, { Component } from 'react';
import './../styles/Footer.css';

/*
*componente footer
*/

class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <p>Development by <a href="https://github.com/Alekuoshu" target="_blank" rel="noopener noreferrer">Alekuoshu</a> | October 2018</p>
      </footer>
    );
  }
}

export default Footer;