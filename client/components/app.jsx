import React from 'react';
import PuzzleBuilder from './puzzle-builder.jsx';
import PuzzleGame from './puzzle-game.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: true,
      createAPuzzle: false,
      playGame: false,
      pyramid: null,
      goal: null
    };
    this.createAPuzzle = this.createAPuzzle.bind(this);
    this.playGame = this.playGame.bind(this);
  }

  createAPuzzle() {
    this.setState({entry: false, createAPuzzle: true});
  }


  playGame(pyramid, goal) {
    this.setState({createAPuzzle: false, playGame: true, pyramid: pyramid, goal: goal});
  }

  render() {
    if (this.state.entry) {
      return (
        <div>
          <div>
            <h1>Welcome to the Pyramid Descent Puzzle Game!</h1>
            <h3>Wanna Play?</h3>
          </div>
          <div>
            <button onClick={this.createAPuzzle}>Build Your Own Puzzle!</button><button>Let Us Choose One For You!</button>
          </div>
        </div>
        );
    };
    if (this.state.createAPuzzle) {
      return (
      <div>
        <div>
          <h2>Puzzle Builder</h2>
        </div>
        <div>
          <PuzzleBuilder playGame={this.playGame}/>
        </div>
      </div>
      )
    }
    if (this.state.playGame) {
      return (
        <div>
          <div>
            <h2>Puzzle Builder</h2>
          </div>
          <div>
            <PuzzleGame goal={this.state.goal} pyramid={this.state.pyramid}/>
          </div>
        </div>
      );
    }
  }
}

export default App;