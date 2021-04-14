import React from 'react';
import EpisodeItem from './EpisodeItem';
import Spinner from '../ui/Spinner';

const EpisodeGrid = ({ episodes, isLoading }) => {
  return isLoading || episodes === null ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {episodes.map((episode) => (
        <EpisodeItem key={episode.episode_id} episode={episode}></EpisodeItem>
      ))}
    </section>
  );
};

export default EpisodeGrid;
