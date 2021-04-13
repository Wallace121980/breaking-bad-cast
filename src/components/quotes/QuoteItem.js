import React from 'react';

const QuoteItem = ({ item }) => {
  return (
    <div className='quote card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{item.author}</h1>
        </div>
        <div className='card-back'>
          <ul>
            <li>
              <strong>Quote:</strong> {item.quote}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
