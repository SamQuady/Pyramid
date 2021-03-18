import React from 'react';
import PuzzleRow from './puzzle-row.jsx';
import Helpers from './helpers/tree-helpers.js';

class PuzzleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pyramid: this.props.pyramid
    };

    this.showAnswer = this.showAnswer.bind(this);
  }

  showAnswer() {
    console.log('going to use helpers here');
  }

  render() {
    return (
      <div>
        <div>{this.state.pyramid.map((row, index) => <PuzzleRow index={index} key={index} build={false} spaces={row} />)}</div>
        <div>
          Goal: {this.props.goal}
        </div>
        <div>
          <button onClick={this.showAnswer}>Show me the Answer!</button>
        </div>
      </div>
      )
  }
}

export default PuzzleGame;