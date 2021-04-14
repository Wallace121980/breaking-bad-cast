import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import EpisodeGrid from './EpisodeGrid';
import Search from '../ui/Search';
import { getEpisodes } from '../../actions/episodeActions';

const Episodes = ({ episodes: { episodes, loading }, getEpisodes }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    getEpisodes(query);
  }, [query, getEpisodes]);

  return (
    <div>
      <Header />
      <Search getQuery={(q) => setQuery(q)} placeholder='Search Series' />
      <EpisodeGrid isLoading={loading} episodes={episodes} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  episodes: state.episodes,
});

export default connect(mapStateToProps, { getEpisodes })(Episodes);
