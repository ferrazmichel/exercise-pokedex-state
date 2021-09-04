import React from 'react';

class NextButton extends React.Component {
  render() {
    const { onClick, disabled } = this.props
    return (
      <button className="pokedex-button" disabled={ disabled } onClick={ onClick }>Next Poke</button>
    )
  }
}

export default NextButton;