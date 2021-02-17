import React from 'react';
import { Link } from 'react-router-dom';

import DragonBackground from '../images/card-background-dragon.jpg';
import FireBackground from '../images/card-background-fire.jpg';
import WaterBackground from '../images/card-background-water.jpg';

import PokéDragon from '../images/logo-pokedragon.png';
import PokéFire from '../images/logo-pokefire.png';
import PokéWater from '../images/logo-pokewater.png';

import '../styles/components/storecard.scss';

interface StorecardProps {
  id: number;
  name: string;
}

const storesLogo = [ PokéDragon, PokéFire, PokéWater ];
const storesBackgound = [ DragonBackground, FireBackground, WaterBackground ];

const Storecard: React.FC<StorecardProps> = ({ id, name }) => {
  const link = name.toLocaleLowerCase().replace("é", "e");

  return (
    <Link to={`/${link}`} className="storecard">
      <div className="card_background">
        <img src={storesBackgound[id]} />
      </div>
      <div className="card_logo">
        <img src={storesLogo[id]} alt={name} />
      </div>
    </Link>
  )
}

export default Storecard;