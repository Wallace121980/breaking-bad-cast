import React from 'react';
import DeathItem from './DeathItem';
import Spinner from '../ui/Spinner';

const DeathGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <DeathItem key={item.death_id} item={item}></DeathItem>
      ))}
    </section>
  );
};

export default DeathGrid;
