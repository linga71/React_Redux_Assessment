import { combineReducers } from 'redux'; 
import Pokemonreducer from './Pokemonreducer';

export default combineReducers({ 
    event: Pokemonreducer 
}) 