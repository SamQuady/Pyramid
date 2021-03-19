import React from 'react';
import PuzzleRow from './puzzle-row.jsx';
import Helpers from './helpers/tree-helpers.js';
import styled from 'styled-components';

const IntroText = styled.div`
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
text-align: center;
`;

const BuildGameButtons = styled.button`
line-height: 30px;
margin-left: 20px;
margin-right: 20px;
background-color: white;
border-radius: 2px;
border-style: solid;
border-color: rgb(184, 184, 184);
border-width: 1px;
color: rgb(41, 41, 41);
cursor: pointer;
font-family: "Roboto","Helvetica Neue","Helvetica","Arial",sans-serif;
font-size: 14px;
font-weight: 400;
height: 34px;
width: auto;
&:hover {box-shadow: inset 0 0 3px #000000;}
`;

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
        <IntroText>Goal</IntroText>
        <input type="number" onChange={this.goalChange}></input>
        <div>
          <BuildGameButtons onClick={this.addARow}>Add a Row!</BuildGameButtons><BuildGameButtons onClick={this.subtractARow}>Subtract a Row!</BuildGameButtons><BuildGameButtons onClick={this.submitPuzzle}>Submit!</BuildGameButtons>
        </div>
      </div>
      )
  }
}

export default PuzzleBuilder;