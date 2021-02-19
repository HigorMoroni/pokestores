import React, { useEffect, useMemo, useState } from 'react';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';
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

  const [searchBarMobile, setSearchBarMobile] = useState(false);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState('');
  const [pageTitle, setPageTitle] = useState('');

  const searchFilter = useMemo(() => {
    const lowerCaseSearch = search.toLowerCase();
    const response = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(lowerCaseSearch));
    if(pokemonList.length === 0) setPageTitle('Carregando...');
    else {
      if(search.length > 0) setPageTitle('Aqui estão os Pokémon encontrados em sua busca');
      else setPageTitle('Encontre seu novo Pokémon aqui');
      if(response.length === 0) setPageTitle('Nenhum Pokémon foi encontrado com esse nome');
    }    
    return response;
  }, [search, pokemonList])
  
  useEffect(() => {
    const blacklist = ["718", "741", "746"];
    apiTypePokemon.get(`${type}`).then(response => {
      const list = response.data.pokemon;
      const listWithNumber = new Array;
      list.map((pokemon: any) => {
        const number = pokemon.pokemon.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","");
        if(number > 0 && number <= 890 && blacklist.indexOf(number) === -1) {
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
    <section id={store} className="store-page">
      <header className="store">
        <img className="logo" src={logo} alt={store} />
        <div className="searchbar">
          <input
            type="search"
            placeholder="Buscar um Pokémon"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <FiSearch size="30px" />
        </div>
        <button className="cartbutton"><FiShoppingCart size="35px" color="white" /></button>
        <div className="nav-mobile-buttons">
          <FiSearch size="40px" onClick={() => setSearchBarMobile(!searchBarMobile)} />
          <FiShoppingCart size="40px"/>
        </div>
        <div className={`searchbar-mobile${ searchBarMobile ? " active" : "" }`}>
          <input
            type="search"
            placeholder="Buscar um Pokémon"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
          <FiSearch size="30px" />
        </div>
      </header>
      <section className="content">
        <h1>{pageTitle}</h1>
        <div className="pokemon-list">
          {searchFilter.map(({ name, number, price }) => {
            return <Pokemoncard key={name} name={name} number={number} price={price} />
          })}
        </div>
      </section>
      <aside>

      </aside>
      <footer>
        
      </footer>
    </section>
  )
}

export default StoreBase;