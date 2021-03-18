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
      <span>
         <input type="text"></input>
      </span>
    );
  }
}

export default PuzzleInputNode;