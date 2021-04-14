import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../ui/Header';
import DeathGrid from './DeathGrid';
import { getDeaths } from '../../actions/deathActions';

const Deaths = ({ deaths: { deaths, loading }, getDeaths }) => {
  useEffect(() => {
    getDeaths();
  }, [getDeaths]);

  return (
    <div>
      <Header />
      <DeathGrid isLoading={loading} deaths={deaths} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  deaths: state.deaths,
});

export default connect(mapStateToProps, { getDeaths })(Deaths);
