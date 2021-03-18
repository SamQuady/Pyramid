import React from 'react';
import PuzzleInputNode from './puzzle-input-node.jsx';

class PuzzleRow extends React.Component {
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
    console.log(this.props.spaces)
    if (this.props.build) {
      return (
        <div>{this.props.spaces.map((space, index) => <PuzzleInputNode/>)}</div>
      )
    }
  }
}

export default PuzzleRow;