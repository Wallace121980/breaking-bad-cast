import React from 'react';
import QuoteItem from './QuoteItem';
import Spinner from '../ui/Spinner';

const QuoteGrid = ({ quotes, isLoading }) => {
  return isLoading || quotes === null ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {quotes.map((quote) => (
        <QuoteItem key={quote.quote_id} quote={quote}></QuoteItem>
      ))}
    </section>
  );
};

export default QuoteGrid;
