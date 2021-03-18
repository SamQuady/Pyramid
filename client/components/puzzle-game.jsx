import React from 'react';
import PuzzleRow from './puzzle-row.jsx';
import Helpers from './helpers/tree-helpers.js';

class PuzzleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pyramid: this.props.pyramid,
      runningTotal: this.props.pyramid[0][0],
      moves: ''
    };

    this.showAnswer = this.showAnswer.bind(this);
  }

  showAnswer() {
    let nodeArray = this.state.pyramid.flat();
    let tree = Helpers.treeBuilder(nodeArray);
    let result = Helpers.pathFinder(tree, this.props.goal);
    this.setState({moves: result, runningTotal: this.props.goal});
  }

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