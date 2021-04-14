import React from 'react';
import DeathItem from './DeathItem';
import Spinner from '../ui/Spinner';

const DeathGrid = ({ deaths, isLoading }) => {
  return isLoading || deaths === null ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {deaths.map((death) => (
        <DeathItem key={death.death_id} death={death}></DeathItem>
      ))}
    </section>
  );
};

export default DeathGrid;
