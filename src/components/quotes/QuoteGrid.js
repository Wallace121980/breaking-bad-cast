import React from 'react';
import QuoteItem from './QuoteItem';
import Spinner from '../ui/Spinner';

const QuoteGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <QuoteItem key={item.quote_id} item={item}></QuoteItem>
      ))}
    </section>
  );
};

export default QuoteGrid;
