import React from 'react';

import Storecard from '../components/Storecard';

import PokéStores from '../images/logo-pokestores.jpg';
import storesJson from '../json/stores.json';

import '../styles/pages/pokestores.scss';

function Pokestores() {
  return (
    <section id="pokestores">
      <header>
        <img src={PokéStores} alt="PokéStores"/>
        <h2>As melhores lojas do seu Pokémon na internet</h2>
      </header>
      <div className="cards-list">
        {storesJson.map(({ id, name }) => {
          return <Storecard key={id} id={id} name={name} />
        })}
      </div>
      <footer>
        <img src={PokéStores} alt="PokéStores"/>
        <span>As melhores lojas do seu Pokémon na internet</span>
      </footer>
    </section>
  )
}

export default Pokestores;
