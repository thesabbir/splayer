import * as types from '../constants/actionTypes';

export function play(path) {
  return {
    type: types.PLAY,
    payload: {
      path
    }
  };
}

export function pause() {
  return {
    type: types.PAUSE
  };
}

export function renderVideo(element) {
  return {
    type: types.RENDER,
    payload: {
      element
    }
  };
}
