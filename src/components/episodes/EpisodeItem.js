import React from 'react';
import { Card, CardFront, CardBack, CardTitle } from '../../style';

const EpisodeItem = ({ episode }) => {
  return (
    <Card className='card-inner'>
      <CardFront padding>
        <CardTitle>{episode.title}</CardTitle>
      </CardFront>
      <CardBack>
        <ul>
          <li>
            <strong>Air Date:</strong> {episode.air_date}
          </li>
          <li>
            <strong>Season:</strong> {episode.season}
          </li>
          <li>
            <strong>Episode:</strong> {episode.episode}
          </li>
        </ul>
      </CardBack>
    </Card>
  );
};

export default EpisodeItem;
