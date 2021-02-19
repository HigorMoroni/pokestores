import React from 'react'
import StoreBase from '../../components/BasePages/StoreBase';

import logo from '../../images/logo-pokefire.png';

import '../../styles/pages/stores/pokefire.scss';

function Pokefire() {
  return (
    <StoreBase key="fire" store="pokefire" logo={logo} />
  )
}

export default Pokefire;