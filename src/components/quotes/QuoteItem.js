import React from 'react';

const QuoteItem = ({ quote }) => {
  return (
    <div className='quote card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{quote.author}</h1>
        </div>
        <div className='card-back'>
          <ul>
            <li>
              <strong>Quote:</strong> {quote.quote}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default QuoteItem;
