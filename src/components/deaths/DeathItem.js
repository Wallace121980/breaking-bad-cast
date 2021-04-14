import React from 'react';

const DeathItem = ({ death }) => {
  return (
    <div className='death card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{death.death}</h1>
        </div>
        <div className='card-back'>
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
        </div>
      </div>
    </div>
  );
};

export default DeathItem;
