import React, { Component } from 'react';
import wcjs from 'wcjs-prebuilt';
import renderer from 'wcjs-renderer';
import Controls from './Controls';
import styles from './Player.css';

class Player extends Component {
  constructor() {
    super();
    this.vlc = wcjs.createPlayer();
    this.state = { progress: 0 };
  }

  componentDidMount() {
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', this.onDrop);
    this.showPlayer();
  }

  componentWillUnmount() {
    document.removeEventListener('dragover', e => e.preventDefault());
    document.removeEventListener('drop', this.onDrop);
  }

  onDrop = (e) => {
    this.vlc.play(`file://${e.dataTransfer.files[0].path}`);
    e.preventDefault();
  };

  initListeners() {
    this.vlc.onPositionChanged = (value) => {
      this.setState({
        progress: value * 100
      });
    };
  }

  showPlayer() {
    renderer.bind(this.playerCanvas, this.vlc, {});
    this.initListeners();
    window.vlc = this.vlc;
  }

  render() {
    return (
      <div>
        <Controls progress={this.state.progress} togglePause={this.vlc.togglePause}/>
        <canvas
          className={styles.player}
          ref={(playerCanvas) => { this.playerCanvas = playerCanvas; }}
          id="splayer"
        />
      </div>
    );
  }
}

export default Player;

