import * as types from '../constants/actionTypes';

export function changed(payload) {
  return {
    type: types.CHANGED_SETTINGS_VALUE,
    payload
  };
}
export function reset() {
  return {
    type: types.RESET_SETTINGS_VALUE
  };
}
