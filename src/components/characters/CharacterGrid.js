import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';
import { Cards } from '../../style';

const CharacterGrid = ({ characters, isLoading }) => {
  return isLoading || characters === null ? (
    <Spinner />
  ) : (
    <Cards>
      {characters.map((character) => (
        <CharacterItem
          key={character.char_id}
          character={character}
        ></CharacterItem>
      ))}
    </Cards>
  );
};

export default CharacterGrid;
