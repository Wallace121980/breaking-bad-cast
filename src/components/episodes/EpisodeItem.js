import React from 'react';

const EpisodeItem = ({ item }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{item.title}</h1>
        </div>
        <div className='card-back'>
          <ul>
            <li>
              <strong>Air Date:</strong> {item.air_date}
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

export default EpisodeItem;
