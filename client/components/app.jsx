import React from 'react';
import PuzzleBuilder from './puzzle-builder.jsx';
import PuzzleGame from './puzzle-game.jsx';
import Helpers from './helpers/tree-helpers.js';
import styled from 'styled-components';

const LandingPageButton = styled.button`
margin-left: 20px;
margin-right: 20px;
background-color: white;
width: 100px;
border-radius: 10%;
border-style: solid;
border-color: rgb(184, 184, 184);
border-width: 4px;
color: rgb(41, 41, 41);
cursor: pointer;
font-size: 20px;
&:hover {box-shadow: inset 0 0 10px #000000;}
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: true,
      createAPuzzle: false,
      playGame: false,
      pyramid: null,
      goal: null,
      defaultPuzzles: [
        {nodes: [[1], [2, 3]], goal: 2}, {nodes: [[1], [2, 3]], goal: 3}, {nodes: [[1], [2, 3], [4, 5, 6]], goal: 8}, {nodes: [[1], [2, 3], [4, 5, 6]], goal: 10}, {nodes: [[1], [2, 3], [4, 5, 6]], goal: 15}, {nodes: [[1], [2, 3], [4, 5, 6]], goal: 18}, {nodes: [[1], [5, 9], [2, 3, 7], [9, 0, 4, 1]], goal: 0}, {nodes: [[2],[4,3],[3,2,6],[2,9,5,2],[10,5,2,15,5]], goal: 720}, {nodes: [[1], [2, 4], [6, 8, 10]], goal: 40}, {nodes: [[1], [2, 4], [6, 8, 10]], goal: 32}, {nodes: [[1], [2, 4], [6, 8, 10]], goal: 12}, {nodes: [[1], [2, 4], [6, 8, 10]], goal: 16}, {nodes: [[1], [3, 7], [9, 8, 9]], goal: 27}, {nodes: [[1], [3, 7], [9, 8, 9]], goal: 63}, {nodes: [[1], [-2, -3], [4, 5, 6]], goal: -8},
      ]
    };
    this.createAPuzzle = this.createAPuzzle.bind(this);
    this.playGame = this.playGame.bind(this);
    this.getAPuzzle = this.getAPuzzle.bind(this);
    this.randomNumberGenerator = this.randomNumberGenerator.bind(this);
  }

  createAPuzzle() {
    this.setState({entry: false, createAPuzzle: true});
  }


  playGame(pyramid, goal) {
    this.setState({createAPuzzle: false, playGame: true, pyramid: pyramid, goal: goal});
  }

  randomNumberGenerator(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  getAPuzzle() {
    let gameIndex = this.randomNumberGenerator(0, this.state.defaultPuzzles.length);
    let game = this.state.defaultPuzzles[gameIndex];
    this.setState({entry: false, playGame: true, pyramid: game.nodes, goal: game.goal});
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
            <LandingPageButton onClick={this.createAPuzzle}>Build Your Own Puzzle!</LandingPageButton><LandingPageButton onClick={this.getAPuzzle}>Let Us Choose One For You!</LandingPageButton>
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