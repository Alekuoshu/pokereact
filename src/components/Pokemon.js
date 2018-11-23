import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './../styles/Pokemon.css';

// component for show pokemon item
class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      id: 0
    };
    this.toggle = this.toggle.bind(this);
  }

  /*
   *toggle for show modal
   */
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  componentDidUpdate() {
    let urlPokemon = this.props.pokeurl;
    fetch(urlPokemon)
      .then(res => res.json())
      .then(response => {
        this.setState({
          pokedata: response
        });
      });
  }

  render(){
    const {pokemon, id, pokeurl} = this.props;
    let pokeid;
    let urlimage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    pokeid = id;
    if (id > 807) {
      pokeid = 0;
    }
    return (
        <div className="pokemon-species" onClick={this.toggle}>
          <div className="pokemon-species-container">
            <div className="pokemon-species-sprite">
              <img src={`${urlimage}${pokeid}.png`} alt={pokemon.name}/>
            </div>
            <h3 className="pokemon-species-name"> {pokemon.name} </h3>
            <span className="pokeid">#{id}</span>
          </div>
          {/* Modal for show pokemon details */}
          <Modal isOpen={this.state.modal} toggle={this.toggle} className="modalDetails">
            <ModalHeader toggle={this.toggle}>
              <span className="pokeName"><strong>Pokedex: #</strong>{id} - {pokemon.name}</span>
            </ModalHeader>
            <ModalBody>
              <div className="row">
                <div className="col-sm-4">
                  <div className="img-container">
                    <img src={`${urlimage}${pokeid}.png`} alt={pokemon.name}/>
                  </div>
                </div>
                <div className="col-sm-8">
                  <div className="pokeDetail">
                    <p><strong>Ability:</strong> La que sea</p>
                    <p><strong>Type:</strong> Electric</p>
                    <p><strong>Url:</strong> {pokeurl}</p>
                  </div>
                </div>
              </div>
            </ModalBody>
          </Modal>
        </div>
    );
    }
}

export default Pokemon;