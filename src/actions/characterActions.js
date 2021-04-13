import axios from 'axios';
import { GET_CHARACTERS, SET_LOADING } from './types';

// Get characters from api
export const getCharacters = (query) => async (dispatch) => {
  try {
    setLoading();

    const result = await axios(
      `https://www.breakingbadapi.com/api/characters?name=${query}`
    );

    dispatch({
      type: GET_CHARACTERS,
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
