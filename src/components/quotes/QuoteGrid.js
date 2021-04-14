import React from 'react';
import QuoteItem from './QuoteItem';
import Spinner from '../ui/Spinner';
import { Cards } from '../../style';

const QuoteGrid = ({ quotes, isLoading }) => {
  return isLoading || quotes === null ? (
    <Spinner />
  ) : (
    <Cards>
      {quotes.map((quote) => (
        <QuoteItem key={quote.quote_id} quote={quote}></QuoteItem>
      ))}
    </Cards>
  );
};

export default QuoteGrid;
