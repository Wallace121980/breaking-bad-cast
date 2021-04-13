import React from 'react';

const DeathItem = ({ item }) => {
  return (
    <div className='death card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{item.death}</h1>
        </div>
        <div className='card-back'>
          <ul>
            <li>
              <strong>Cause:</strong> {item.cause}
            </li>
            <li>
              <strong>Responsible:</strong> {item.responsible}
            </li>
            <li>
              <strong>Last Words:</strong> {item.last_words}
            </li>
            <li>
              <strong>Season:</strong> {item.season}
            </li>
            <li>
              <strong>Episode:</strong> {item.episode}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DeathItem;
