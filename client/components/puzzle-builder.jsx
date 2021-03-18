import React from 'react';
import PuzzleRow from './puzzle-row.jsx';

class PuzzleBuilder extends React.Component {
  constructor() {
    super();
    this.state = {levels: [[0], [0, 0], [0, 0, 0]]};
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
      <div>{this.state.levels.map((level, index) => <PuzzleRow key={index} build={true} spaces={level} />)}</div>
      )
  }
}

export default PuzzleBuilder;