import React from 'react';
import { Card, CardFront, CardBack, CardTitle } from '../../style';

const DeathItem = ({ death }) => {
  return (
    <Card>
      <CardFront>
        <CardTitle>{death.death}</CardTitle>
      </CardFront>
      <CardBack>
        <ul>
          <li>
            <strong>Cause:</strong> {death.cause}
          </li>
          <li>
            <strong>Responsible:</strong> {death.responsible}
          </li>
          <li>
            <strong>Last Words:</strong> {death.last_words}
          </li>
          <li>
            <strong>Season:</strong> {death.season}
          </li>
          <li>
            <strong>Episode:</strong> {death.episode}
          </li>
        </ul>
      </CardBack>
    </Card>
  );
};

export default DeathItem;
