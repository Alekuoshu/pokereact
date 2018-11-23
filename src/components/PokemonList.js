import React from 'react';
import Pokemon from './Pokemon';
import pokeloading from './../images/pokeloading.gif';
import './../styles/Pokemon.css';


// component for show pokemons list
class PokemonList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      species : [],
      fetched : false,
      loading : false,
    };
  }
  componentWillMount() {
    this.setState({
      loading : true
    });
    fetch('https://pokeapi.co/api/v2/pokemon/').then(res => res.json())
    .then(response=>{
      this.setState({
        species : response.results,
        loading : true,
        fetched : true
      });
    })
    .catch(err => console.log(err));
  }

  render(){
    const {fetched, loading, species} = this.state;
    let content, hload;
    if(fetched){
      content = <div className="pokemon-species-list">{species.map((pokemon,index)=><Pokemon key={pokemon.name} id={index+1} pokeurl={pokemon.url} pokemon={pokemon}/>)}</div>;
    }else if(loading && !fetched){
        content = <div className="pokeloading"><img src={pokeloading} alt="Loading ..."/></div>;
        hload = <h2 className="loading"> Loading ... </h2>;
    }
    else{
      content = <div/>;
      hload = "";
    }
    return  <div>
      {content}
      {hload}
    </div>;
  }
}

export default PokemonList;