import React, {
  Component,
  PropTypes
} from 'react';
import Controls from './Controls';
import styles from './Player.css';


class Player extends Component {
  static propTypes = {
    renderVideo: PropTypes.func.isRequired,
    play: PropTypes.func.isRequired,
    addEventLister: PropTypes.func.isRequired,
    nowPlaying: PropTypes.object.isRequired //eslint-disable-line react/forbid-prop-types
  };

  constructor() {
    super();
    this.state = {
      progress: 0
    };
  }

  componentDidMount() {
    document.addEventListener('dragover', e => e.preventDefault());
    document.addEventListener('drop', this.onDrop);
    this.props.renderVideo(this.playerCanvas);
    this.props.addEventLister('onPositionChanged', (position) => {
      this.setState({
        progress: position * 100
      });
    });
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
        <Controls progress={this.state.progress} {...this.props.nowPlaying}/>
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

