/**
 * @flow
 */

import React, { Component } from 'react';
import Controls from './Controls';

class Player extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Controls/>
        <canvas
          id="splayer"
        />
      </div>
    );
  }
}

export default Player;

