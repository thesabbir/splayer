/**
 * @flow
 */
import * as types from '../constants/actionTypes';

/**
 *
 * @param state
 * @param action
 * @returns {Object}
 */
export default function (state: Object = {}, action: Object): Object {
  switch (action.type) {
    case types.PLAY:
      return {
        ...state,
        nowPlaying: action.data
      };
    default:
      return state;
  }
}
