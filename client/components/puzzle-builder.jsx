import React from 'react';
import PuzzleRow from './puzzle-row.jsx';

class PuzzleBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      levels: [[0], [0, 0], [0, 0, 0]],
      levelsInt: 3
    };
    this.addARow = this.addARow.bind(this);
    this.subtractARow = this.subtractARow.bind(this);
  }

  subtractARow() {
    this.setState({entry: false, subtractARow: true});
  }

  addARow() {
    let newLevelsInt = this.state.levelsInt + 1;
    let newRow = new Array(newLevelsInt).fill(0);
    let newLevels = this.state.levels;
    newLevels.push(newRow);
    console.log(newLevels, newLevelsInt);
    this.setState({levels: newLevels, levelsInt: newLevelsInt});
  }

  render() {
    return (
      <div>
        <div>{this.state.levels.map((level, index) => <PuzzleRow key={index} build={true} spaces={level} />)}</div>
        <div>
          <button onClick={this.addARow}>Add a Row!</button><button>Subtract a Row!</button><button>Submit!</button>
        </div>
      </div>
      )
  }
}

export default PuzzleBuilder;