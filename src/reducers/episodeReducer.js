import { GET_EPISODES, SET_LOADING } from '../actions/types';

const initialState = {
  episodes: null,
  loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_EPISODES:
      return {
        ...state,
        episodes: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
