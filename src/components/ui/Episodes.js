import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import EpisodeGrid from '../episodes/EpisodeGrid';
import Search from './Search';

const Episodes = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/episodes`);

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <EpisodeGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Episodes;
