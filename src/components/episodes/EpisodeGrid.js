import React from 'react';
import EpisodeItem from './EpisodeItem';
import Spinner from '../ui/Spinner';

const EpisodeGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <EpisodeItem key={item.episode_id} item={item}></EpisodeItem>
      ))}
    </section>
  );
};

export default EpisodeGrid;
