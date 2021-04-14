import axios from 'axios';
import { GET_QUOTES, SET_LOADING } from './types';

// Get characters from api
export const getQuotes = (query) => async (dispatch) => {
  try {
    setLoading();

    const result = await axios(`https://www.breakingbadapi.com/api/quotes`);

    dispatch({
      type: GET_QUOTES,
      payload: result.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
