import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Pokestores from './pages/Pokestores';
import Pokedragon from './pages/Stores/Pokedragon';
import Pokefire from './pages/Stores/Pokefire';
import Pokewater from './pages/Stores/Pokewater';
import DragonDetail from './pages/Details/DragonDetail';
import FireDetail from './pages/Details/FireDetail';
import WaterDetail from './pages/Details/WaterDetail';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Pokestores} exact />
        <Route path="/pokedragon" component={Pokedragon} />
        <Route path="/pokefire" component={Pokefire} />
        <Route path="/pokewater" component={Pokewater} />
        <Route path="/pokedragon/:id" component={DragonDetail} />
        <Route path="/pokefire/:id" component={FireDetail} />
        <Route path="/pokewater/:id" component={WaterDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;