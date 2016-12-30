/**
 * @flow
 */
import * as types from '../constants/actionTypes';

type Action = {
  type: string,
  payload: ?Object
};

type CommandAction = {
  type: string
};

export function play(path: string): Action {
  return {
    type: types.PLAY,
    payload: {
      path
    }
  };
}

export function pause(): CommandAction {
  return {
    type: types.PAUSE
  };
}

export function renderVideo(element: HTMLElement): Action {
  return {
    type: types.RENDER,
    payload: {
      element
    }
  };
}

export function addEventLister(eventName: string, callback: Function): Action {
  return {
    type: types.ADD_PLAYER_EVENT,
    payload: {
      eventName,
      callback
    }
  };
}

