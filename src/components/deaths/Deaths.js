import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../ui/Header';
import DeathGrid from './DeathGrid';
import Search from '../ui/Search';

const Deaths = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/deaths`);

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} placeholder='Search Characters' />
      <DeathGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Deaths;
