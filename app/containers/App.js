/**
 * @flow
 */
import React, { Component } from 'react';

class App extends Component {
  props: {
    children: HTMLElement
  };
  static PropTypes

  render() {
    return (
      <div className="main_container">
        {this.props.children}
      </div>
    );
  }
}

export default App;
