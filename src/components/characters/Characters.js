import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import CharacterGrid from './CharacterGrid';
import Search from '../ui/Search';
import { getCharacters } from '../../actions/characterActions';

const Characters = ({ characters: { characters, loading }, getCharacters }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    getCharacters(query);
  }, [query, getCharacters]);

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} placeholder='Search Characters' />
      <CharacterGrid isLoading={loading} characters={characters} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
});

export default connect(mapStateToProps, { getCharacters })(Characters);
