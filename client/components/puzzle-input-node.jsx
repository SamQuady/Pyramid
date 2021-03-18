import React from 'react';

class PuzzleInputNode extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.getAPuzzle = this.getAPuzzle.bind(this);
    this.createAPuzzle = this.createAPuzzle.bind(this);
  }

  createAPuzzle() {
    this.setState({entry: false, createAPuzzle: true});
  }

  getAPuzzle() {
    this.setState({entry: false, getAPuzzle: true});
  }

  render() {
    return (
    <input type="text"></input>
    );
  }
}

export default PuzzleInputNode;