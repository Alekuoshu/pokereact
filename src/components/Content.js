import React, { Component } from 'react';
import PokemonList from './PokemonList';
import './../styles/Content.css';

/*
* Div that contains all the cards(pokeballs) with pokémon and their respective names
*/
class Content extends Component{
  render() {
    return(
      <div id="content" className="container">
        <PokemonList />
      </div>
    )
  }
}

export default Content;
