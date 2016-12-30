/**
 * @flow
 */

import wcjs from 'wcjs-prebuilt';
import render from 'wcjs-renderer';
import supportedEvents from './supportedEvents';

class Player {
  player: Function;
  options: Object;

  constructor(options: Object = {}) {
    this.options = options;
    this.player = wcjs.createPlayer();
    if (this.options.debug) {
      window.vlc = this.player;
      console.log(this.player.vlcVersion); //eslint-disable-line
    }
  }

  renderVideo(element: HTMLElement, options: Object = {}) {
    render.bind(element, this.player, options);
  }

  play(file: string) {
    this.player.play(file);
  }

  addToPlaylist(item: string) {
    this.player.playlist.add(item);
  }

  getPlayListItems(): Array<Object> {
    const count = this.player.playlist.items.count;
    const items = [];
    for (let i = 0; i < count; i += 1) {
      items.push(this.player.playlist.items[i]);
    }
    return items;
  }

  playOrPause(): boolean {
    this.player.togglePause();
    return this.isPlaying();
  }

  isPlaying(): boolean {
    return this.player.playing;
  }

  isMute(): boolean {
    return this.player.mute;
  }

  getPosition(): number {
    return this.player.position * 100;
  }

  setPosition(value: number): number {
    this.player.position = (value / 100);
    return this.getPosition();
  }

  addEventListener(eventName: string, callback: Function) {
    if (supportedEvents.includes(eventName)) {
      this.player[eventName] = callback;
    } else {
      throw Error(`${eventName} is a not a valid player event`);
    }
  }

}

export default Player;
