import React from 'react';
import { Card, CardFront, CardBack, CardTitle, CardImage } from '../../style';

const CharacterItem = ({ character }) => {
  return (
    <Card>
      <CardFront>
        <CardImage src={character.img} alt='' />
      </CardFront>
      <CardBack>
        <CardTitle>{character.name}</CardTitle>
        <ul>
          <li>
            <strong>Actor Name:</strong> {character.portrayed}
          </li>
          <li>
            <strong>Nickname:</strong> {character.nickname}
          </li>
          <li>
            <strong>Birthday:</strong> {character.birthday}
          </li>
          <li>
            <strong>Status:</strong> {character.status}
          </li>
        </ul>
      </CardBack>
    </Card>
  );
};

export default CharacterItem;
