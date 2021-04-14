import React from 'react';
import DeathItem from './DeathItem';
import Spinner from '../ui/Spinner';
import { Cards } from '../../style';

const DeathGrid = ({ deaths, isLoading }) => {
  return isLoading || deaths === null ? (
    <Spinner />
  ) : (
    <Cards>
      {deaths.map((death) => (
        <DeathItem key={death.death_id} death={death}></DeathItem>
      ))}
    </Cards>
  );
};

export default DeathGrid;
