import React, { useEffect, useState } from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
import { isArrayTypeNode } from 'typescript';
import { apiTypePokemon } from '../../services/api';

import '../../styles/components/storebase.scss';
import Pokemoncard from '../Pokemoncard';

interface StoreBaseProps {
  store: string;
  logo: string;
}

export interface Pokemon {
  name: string;
  number: string;
  price: string;
}

const StoreBase: React.FC<StoreBaseProps> = ({ store, logo }) => {
  const type = store.replace("poke", "");

  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    apiTypePokemon.get(`${type}`).then(response => {
      const list = response.data.pokemon;
      const listWithNumber = new Array;
      list.map((pokemon: any) => {
        const number = pokemon.pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","");
        if(number > 0 && number <= 890 ) {
          listWithNumber.push({
            name: pokemon.pokemon.name.substring(0,1).toUpperCase().concat(pokemon.pokemon.name.substring(1)),
            number,
            price: (number/pokemon.pokemon.name.length+100).toFixed(0)
          });
        }
      })
      const ordenedList = listWithNumber.sort((a:any, b:any) => (a.name < b.name) ? -1 : 1);
      setPokemonList(ordenedList);
    })
  }, []);

  return (
    <section id={store}>
      <header className="store">
        <img className="logo" src={logo} alt={store} />
        <div className="searchbar">
          <input type="search" placeholder="Buscar um Pokémon" />
          <FiSearch size="30px" />
        </div>
        <button className="cartbutton"><FiShoppingCart size="35px" color="white" /></button>
      </header>
      <div className="pokemon-list">
        {pokemonList.map(({ name, number, price }) => {
          return <Pokemoncard name={name} number={number} price={price} />
        })}
      </div>
      <aside>

      </aside>
      <footer>
        
      </footer>
    </section>
  )
}

export default StoreBase;