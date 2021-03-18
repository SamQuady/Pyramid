import React from 'react';
import PuzzleRow from './puzzle-row.jsx';
import Helpers from './helpers/tree-helpers.js';

class PuzzleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pyramid: this.props.pyramid,
      runningTotal: this.props.pyramid[0][0],
      moves: '',
      tree: Helpers.treeBuilder(this.props.pyramid.flat()),
      clickPyramid: null
    };
    this.showAnswer = this.showAnswer.bind(this);
    this.nodeClick = this.nodeClick.bind(this);
    this.clickPyramidBuilder = this.clickPyramidBuilder.bind(this);
  }

  showAnswer() {
    let result = Helpers.pathFinder(this.state.tree, this.props.goal);
    this.setState({moves: result, runningTotal: this.props.goal});
  }

  nodeClick(row, position) {
    if (this.state.clickPyramid === null) {
      this.clickPyramidBuilder()
    }
    //still need to add some logic checking if the click is valid, ie down a row and either left or right
    let clickPyramid = this.state.clickPyramid;
    let runningTotal = this.state.runningTotal;
    if (!clickPyramid[row][position]) {
      clickPyramid[row][position] = 1;
      runningTotal *= this.state.pyramid[row][position];
    } else {
      clickPyramid[row][position] = 0;
      runningTotal /= this.state.pyramid[row][position];
    }
    this.setState({clickPyramid: clickPyramid, runningTotal: runningTotal});
  }

  clickPyramidBuilder() {
    let clickPyramid = [];
    for (let index = 0; index < this.props.pyramid.length; index ++) {
      let clickRow = new Array(this.props.pyramid[index].length).fill(0);
      clickPyramid.push(clickRow);
    }
    this.setState({clickPyramid: clickPyramid})
    console.log(this.state.clickPyramid.length)
  }
  //need to feed column numer and index number to click handler
  render() {
    return (
      <div>
        <div>{this.state.pyramid.map((row, index) => <PuzzleRow index={index} key={index} build={false} spaces={row} />)}</div>
        <div>
          <div>
            Moves: {this.state.moves}
          </div>
          <div>
            Running Total: {this.state.runningTotal}
          </div>
          <div>
            Goal: {this.props.goal}
          </div>
        </div>
        <div>
          <button onClick={this.showAnswer}>Show me the Answer!</button>
        </div>
      </div>
      )
  }
}

export default PuzzleGame;