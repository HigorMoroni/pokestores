import React from 'react'
import StoreBase from '../../components/BasePages/StoreBase';

import logo from '../../images/logo-pokewater.png';

import '../../styles/pages/stores/pokewater.scss';

function Pokewater() {
  return (
    <StoreBase store="pokewater" logo={logo} />
  )
}

export default Pokewater;