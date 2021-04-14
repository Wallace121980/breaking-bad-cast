import axios from 'axios';
import { GET_DEATHS, SET_LOADING } from './types';

// Get deaths from api
export const getDeaths = (query) => async (dispatch) => {
  try {
    setLoading();

    const result = await axios(`https://www.breakingbadapi.com/api/deaths`);

    dispatch({
      type: GET_DEATHS,
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
