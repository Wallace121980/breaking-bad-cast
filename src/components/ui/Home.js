import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import CharacterGrid from '../characters/CharacterGrid';
import Search from './Search';

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} placeholder='Search Characters' />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default Home;
