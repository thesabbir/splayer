import React, { Component } from 'react';
import Controls from './Controls';
import styles from './Player.css';
import SPlayer from '../utils/SPlayer';

const player = new SPlayer({ debug: true });

class Player extends Component {
  constructor() {
    super();
    this.state = { progress: 0 };
  }

  componentDidMount() {
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', this.onDrop);
    player.renderVideo(this.playerCanvas);
    player.addEventListener('onPositionChanged', (position) => {
      this.setState({
        progress: (position * 100)
      });
    });
  }

  componentWillUnmount() {
    document.removeEventListener('dragover', e => e.preventDefault());
    document.removeEventListener('drop', this.onDrop);
  }

  onDrop = (e) => {
    e.preventDefault();
    player.play(`file://${e.dataTransfer.files[0].path}`);
  };

  render() {
    return (
      <div>
        <Controls progress={this.state.progress} togglePause={player.togglePause}/>
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

