/**
 * @flow
 */

import wcjs from 'wcjs-prebuilt';
import render from 'wcjs-renderer';
import supportedEvents from '../utils/supportedEvents';

class Player {
  vlc: Object;
  options: Object;

  constructor(options: Object = {}) {
    this.options = options;
    this.vlc = wcjs.createPlayer();
    if (this.options.debug) {
      window.player = this;
      console.log(`Debug mode wcjs ${this.vlc.vlcVersion}`); //eslint-disable-line
    }
  }

  renderVideo = (element: HTMLElement, options: Object = {}) => {
    render.bind(element, this.vlc, options);
  };

  play = (file: string): string => {
    this.vlc.play(file);
    return file;
  };

  addToPlaylist(item: string) {
    this.vlc.playlist.add(item);
  }

  getPlayListItems(): Array<Object> {
    const count = this.vlc.playlist.items.count;
    const items = [];
    for (let i = 0; i < count; i += 1) {
      items.push(this.vlc.playlist.items[i]);
    }
    return items;
  }

  playOrPause(): boolean {
    this.vlc.togglePause();
    return this.isPlaying();
  }

  isPlaying(): boolean {
    return this.vlc.playing;
  }

  isMute(): boolean {
    return this.vlc.mute;
  }

  getPosition(): number {
    return this.vlc.position * 100;
  }

  setPosition(value: number): number {
    this.vlc.position = (value / 100);
    return this.getPosition();
  }

  addEventListener(eventName: string, callback: Function) {
    if (supportedEvents.includes(eventName)) {
      this.vlc[eventName] = callback;
    } else {
      throw Error(`${eventName} is a not a valid player event`);
    }
  }

}

export default Player;
