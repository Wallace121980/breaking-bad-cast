import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../ui/Header';
import EpisodeGrid from './EpisodeGrid';
import Search from '../ui/Search';

const Episodes = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/episodes?series=${query}`
      );

      console.log(result.data);

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} placeholder='Search Series' />
      <EpisodeGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Episodes;
