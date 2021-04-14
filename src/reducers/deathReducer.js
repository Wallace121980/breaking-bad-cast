import { GET_DEATHS, SET_LOADING } from '../actions/types';

const initialState = {
  deaths: null,
  loading: false,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_DEATHS:
      return {
        ...state,
        deaths: action.payload,
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
