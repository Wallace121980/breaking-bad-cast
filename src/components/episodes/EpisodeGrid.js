import React from 'react';
import EpisodeItem from './EpisodeItem';
import Spinner from '../ui/Spinner';
import { Cards } from '../../style';

const EpisodeGrid = ({ episodes, isLoading }) => {
  return isLoading || episodes === null ? (
    <Spinner />
  ) : (
    <Cards>
      {episodes.map((episode) => (
        <EpisodeItem key={episode.episode_id} episode={episode}></EpisodeItem>
      ))}
    </Cards>
  );
};

export default EpisodeGrid;
