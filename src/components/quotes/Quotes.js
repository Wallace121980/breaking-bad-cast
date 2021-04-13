import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../ui/Header';
import QuoteGrid from './QuoteGrid';
import Search from '../ui/Search';

const Quotes = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/quotes`);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} placeholder='Search Characters' />
      <QuoteGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Quotes;
