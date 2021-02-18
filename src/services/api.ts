import axios from 'axios';

export const apiTypePokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/type/',
});

export const apiDataPokemon = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/',
});