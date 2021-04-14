import React from 'react';

const EpisodeItem = ({ episode }) => {
  return (
    <div className='episode card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{episode.title}</h1>
        </div>
        <div className='card-back'>
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
        </div>
      </div>
    </div>
  );
};

export default EpisodeItem;
