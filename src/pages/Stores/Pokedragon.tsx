import React from 'react'
import StoreBase from '../../components/BasePages/StoreBase';

import logo from '../../images/logo-pokedragon.png';

import '../../styles/pages/stores/pokedragon.scss';

function Pokedragon() {
  return (
    <StoreBase store="pokedragon" logo={logo} />
  )
}

export default Pokedragon;