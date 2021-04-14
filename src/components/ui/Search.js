import React, { useState } from 'react';
import { StyledSearch, Input } from '../../style';

const Search = ({ getQuery, placeholder }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <StyledSearch>
      <form>
        <Input
          type='text'
          placeholder={placeholder}
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </StyledSearch>
  );
};

export default Search;
