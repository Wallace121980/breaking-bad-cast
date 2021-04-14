import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import QuoteGrid from './QuoteGrid';
import Search from '../ui/Search';
import { getQuotes } from '../../actions/quoteActions';

const Quotes = ({ quotes: { quotes, loading }, getQuotes }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    getQuotes();
  }, [query, getQuotes]);

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} placeholder='Search Quotes' />
      <QuoteGrid isLoading={loading} quotes={quotes} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  quotes: state.quotes,
});

export default connect(mapStateToProps, { getQuotes })(Quotes);
