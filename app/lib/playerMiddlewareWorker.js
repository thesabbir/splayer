import * as types from '../constants/actionTypes';

export default function worker(action, player) {
  switch (action.type) {
    case types.PLAY:
      return player.play(action.payload.path);
    case types.RENDER:
      player.renderVideo(action.payload.element);
      return true;
    default:
      return null;
  }
}
