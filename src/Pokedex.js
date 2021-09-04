import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';
import NextButton from './NextButton';
import './PokedexCSS.css';


class Pokedex extends React.Component {
  constructor(props) {
		super(props)
		this.state = { actualPoke: 0, type: 'all' }
		this.nextPokemonButton = this.nextPokemonButton.bind(this);
    this.filterPokemon = this.filterPokemon.bind(this);
    this.filterType = this.filterType.bind(this);
    this.buttonEnable = this.buttonEnable.bind(this);
	}
	
	nextPokemonButton() {
    const pokemonArray = this.filterPokemon()
		this.setState((estadoAnterior, _props) => ({
			actualPoke: this.state.actualPoke < pokemonArray.length - 1 ? estadoAnterior.actualPoke + 1 : 0,
		}))
	}

  filterPokemon() {
    const pokemonArray = this.props.pokemons
    if(this.state.type === 'all') {
      return pokemonArray
    } 
    return pokemonArray.filter((pokemon) => pokemon.type === this.state.type)
  }

  filterType(event) {
    const string = event.target.className;
    const type = string.replace(' type-button','')
    this.setState({type: type})
  }

  buttonEnable() {
    const pokemonArray = this.filterPokemon()
    return pokemonArray.length === 1 ? true : false;
  }
  
	render() {
			const pokemonArray = this.filterPokemon()
			const pokemon = pokemonArray[this.state.actualPoke];
			return (
					<div className="pokedex">
							<Pokemon pokemon={ pokemon } />
							<NextButton onClick={ this.nextPokemonButton } disabled={ this.buttonEnable() } />
              <div className="row-btn-types">
                <button id="All" onClick={ this.filterType } className="all type-button">All Types</button>
                <button id="Electric" onClick={ this.filterType } className="Electric type-button">Electric</button>
                <button id="Fire" onClick={ this.filterType } className="Fire type-button">Fire</button>
                <button id="Bug" onClick={ this.filterType } className="Bug type-button">Bug</button>
                <button id="Poison" onClick={ this.filterType } className="Poison type-button">Poison</button>
                <button id="Psychic" onClick={ this.filterType } className="Psychic type-button">Psychic</button>
                <button id="Normal" onClick={ this.filterType } className="Normal type-button">Normal</button>
                <button id="Dragon" onClick={ this.filterType } className="Dragon type-button">Dragon</button>
              </div>
					</div>
			);
	}
}

Pokedex.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    averageWeight: PropTypes.shape({
      value: PropTypes.number.isRequired,
      measurementUnit: PropTypes.string.isRequired,
    }).isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

export default Pokedex;