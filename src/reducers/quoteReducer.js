import { GET_QUOTES, SET_LOADING } from '../actions/types';

const initialState = {
  quotes: null,
  loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_QUOTES:
      return {
        ...state,
        quotes: action.payload,
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
