import React from 'react';
import { Card, CardFront, CardBack, CardTitle } from '../../style';

const QuoteItem = ({ quote }) => {
  return (
    <Card>
      <CardFront>
        <CardTitle>{quote.author}</CardTitle>
      </CardFront>
      <CardBack>
        <ul>
          <li>
            <strong>Quote:</strong> {quote.quote}
          </li>
        </ul>
      </CardBack>
    </Card>
  );
};

export default QuoteItem;
