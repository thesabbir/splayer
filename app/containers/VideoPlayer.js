/**
 * @flow
 */

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Player from '../components/Player';
import * as PlayerActions from '../actions/playerActions';

function mapStateToProps(state) {
  return {
    nowPlaying: state.player.nowPlaying
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlayerActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player); // eslint-disable-line
