import React, { Component } from 'react';
import PropTypes from 'prop-types';

<<<<<<< HEAD
class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.pokemon;

        return (
            <div className="pokemon">
                <div>
                    <p className="pokeName"> {name} </p>
                    <p> {type} </p>
                    <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
                </div>
                <img src={image} alt={`${name} sprite`} />
            </div>
        );
    }
=======
class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image} = this.props.poke;
    const { value, measurementUnit } = averageWeight;
    return (
      <div className='pokemon'>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <p>{value}{measurementUnit}</p>
        <img className = "pokemon-img" src={image} alt='imagem do pokemon' />
      </div>
    );
  }
>>>>>>> cb0b673643c7f4370c90486ee826391bb8a1f896
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  averageWeight: PropTypes.shape({
    value: PropTypes.number.isRequired,
    measurementUnit: PropTypes.string.isRequired,
  }).isRequired,
  image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Pokemon;
