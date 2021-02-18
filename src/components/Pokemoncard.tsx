import React from 'react';

import { Pokemon } from '../components/BasePages/StoreBase';

import '../styles/components/pokemoncard.scss';

const Pokemoncard: React.FC<Pokemon> = ({ name, number, price }) => {
  return (
    <div className="pokemon-card">
      <img
        className="pokemon-image"
        src={`https://pokeres.bastionbot.org/images/pokemon/${number}.png`}
        alt={name}
      />
      <h3 className="pokemon-name">{name}</h3>
      <h2 className="pokemon-price">{`R$ ${price},00`}</h2>
      <a className="buy-button" href="#">Comprar</a>
    </div>
  )
}

export default Pokemoncard;