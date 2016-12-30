import React, { Component } from 'react';
import Controls from './Controls';
import styles from './Player.css';


class Player extends Component {
  constructor() {
    super();
    this.state = { progress: 0 };
  }

  componentDidMount() {
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', this.onDrop);
    this.props.renderVideo(this.playerCanvas);
  }

  componentWillUnmount() {
    document.removeEventListener('dragover', e => e.preventDefault());
    document.removeEventListener('drop', this.onDrop);
  }

  onDrop = (e) => {
    e.preventDefault();
    this.props.play(`file://${e.dataTransfer.files[0].path}`);
  };

  render() {
    return (
      <div>
        <Controls progress={this.state.progress}/>
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

