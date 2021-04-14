import axios from 'axios';
import { GET_EPISODES, SET_LOADING } from './types';

// Get episodes from api
export const getEpisodes = (query) => async (dispatch) => {
  try {
    setLoading();

    const result = await axios(
      `https://www.breakingbadapi.com/api/episodes?series=${query}`
    );

    dispatch({
      type: GET_EPISODES,
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
