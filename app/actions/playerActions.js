import * as types from '../constants/actionTypes';

export function play() {
  return {
    type: types.PLAY
  };
}

export function pause() {
  return {
    type: types.PAUSE
  };
}
