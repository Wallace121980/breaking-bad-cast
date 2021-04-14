import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import QuoteGrid from './QuoteGrid';
import { getQuotes } from '../../actions/quoteActions';

const Quotes = ({ quotes: { quotes, loading }, getQuotes }) => {
  useEffect(() => {
    getQuotes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header />
      <QuoteGrid isLoading={loading} quotes={quotes} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  quotes: state.quotes,
});

export default connect(mapStateToProps, { getQuotes })(Quotes);
