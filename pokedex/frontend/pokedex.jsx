import React from 'react';
import ReactDOM from 'react-dom';
import { receiveAllPokemon, requestAllPokemon } from './actions/pokemon_actions';
import Root from './components/root';
import { selectAllPokemon } from './reducers/selectors';
import { configureStore } from './store/store';
import { fetchAllPokemon } from './util/api_util';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, rootEl);
  window.fetchAllPokemon = fetchAllPokemon;
  window.receiveAllPokemon = receiveAllPokemon;
  window.requestAllPokemon = requestAllPokemon
  window.store = store;
  window.selectAllPokemon = selectAllPokemon
});