import { combineReducers } from 'redux';
import characterReducer from './characterReducer';
import deathReducer from './deathReducer';
import episodeReducer from './episodeReducer';
import quoteReducer from './quoteReducer';

export default combineReducers({
  characters: characterReducer,
  episodes: episodeReducer,
  quotes: quoteReducer,
  deaths: deathReducer,
});
