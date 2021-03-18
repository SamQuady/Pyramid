import React from 'react';
import PuzzleRow from './puzzle-row.jsx';
import Helpers from './helpers/tree-helpers.js';

class PuzzleBuilder extends React.Component {
  constructor() {
    super();
    this.state = {
      levels: [[0], [0, 0], [0, 0, 0]],
      levelsInt: 3,
      goal: 0
    };
    this.addARow = this.addARow.bind(this);
    this.subtractARow = this.subtractARow.bind(this);
    this.submitPuzzle = this.submitPuzzle.bind(this);
    this.onChange = this.onChange.bind(this);
    this.goalChange = this.goalChange.bind(this);
  }

  subtractARow() {
    let newLevelsInt = this.state.levelsInt - 1;
    if (newLevelsInt < 1) {
      return alert('We Need at Least 1 Row!');
    }
    let newLevels = this.state.levels;
    newLevels.pop();
    this.setState({levels: newLevels, levelsInt: newLevelsInt});
  }

  addARow() {
    let newLevelsInt = this.state.levelsInt + 1;
    let newRow = new Array(newLevelsInt).fill(0);
    let newLevels = this.state.levels;
    newLevels.push(newRow);
    this.setState({levels: newLevels, levelsInt: newLevelsInt});
  }

  submitPuzzle() {
    let nodeArray = this.state.levels.flat();
    let tree = Helpers.treeBuilder(nodeArray);
    if (this.state.goal === 0) {
      alert('You Haven\'t Set a Goal Yet!');
    } else if (!Helpers.pathFinder(tree, this.state.goal)) {
      alert('Oops! Your Puzzle Doesn\'t Have a Valid Solution!');
    } else if (confirm('Are You Sure About Your Puzzle?')) {
      this.props.playGame(this.state.levels, this.state.goal);
    }
  }

  onChange(index, row) {
    let puzzle = this.state.levels;
    puzzle[index] = row;
    this.setState({levels: puzzle});
  }

  goalChange() {
    this.setState({goal: Number(event.target.value)});
  }

  render() {
    return (
      <div>
        <div>{this.state.levels.map((level, index) => <PuzzleRow onChange={this.onChange} index={index} key={index} build={true} spaces={level} />)}</div>
        <div>Goal</div>
        <input type="number" onChange={this.goalChange}></input>
        <div>
          <button onClick={this.addARow}>Add a Row!</button><button onClick={this.subtractARow}>Subtract a Row!</button><button onClick={this.submitPuzzle}>Submit!</button>
        </div>
      </div>
      )
  }
}

export default PuzzleBuilder;