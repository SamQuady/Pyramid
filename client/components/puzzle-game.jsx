import React from 'react';
import PuzzleRow from './puzzle-row.jsx';
import Helpers from './helpers/tree-helpers.js';
import styled from 'styled-components';

const GameTextFields = styled.span`
font-family: Arial, Helvetica, sans-serif;
font-size: 20px;
text-align: center;
padding-left: 60px;
padding-right: 60px;
`;

const GameTextFieldHolder = styled.div`
padding-top: 40px;
text-align: center;
`;

const ShowAnswerButton = styled.button`
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

const ShowAnswerButtonHolder = styled.div`
padding-top: 60px;
text-align: center;
`;

class PuzzleGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pyramid: this.props.pyramid,
      runningTotal: this.props.pyramid[0][0],
      moves: '',
      clickPyramid: null,
      tree: Helpers.treeBuilder(this.props.pyramid.flat()),
      clicks: [[0,0]]
    };
    this.showAnswer = this.showAnswer.bind(this);
    this.nodeClick = this.nodeClick.bind(this);
    this.clickPyramidBuilder = this.clickPyramidBuilder.bind(this);
    this.nodeClick = this.nodeClick.bind(this);
  }

  showAnswer() {
    let result = Helpers.pathFinder(this.state.tree, this.props.goal);
    this.setState({moves: result, runningTotal: this.props.goal});
  }

  nodeClick(row, position) {
    //still need to add some logic checking if the click is valid, ie down a row and either left or right
    let clickPyramid = this.state.clickPyramid;
    let runningTotal = this.state.runningTotal;
    let clicks = this.state.clicks;

    if (!clickPyramid[row][position]) {
      if (row !== mostRecentClick[0] + 1 || (position !== mostRecentClick[1] && position !== mostRecentClick[1] + 1)) {
        event.preventDefault();
      } else {
        clickPyramid[row][position] = 1;
        runningTotal *= this.state.pyramid[row][position];
        let click = [row, position];
        clicks.push(click);
      }
    } else {
      if (row !== mostRecentClick[0] || position !== mostRecentClick[1]) {
        event.preventDefault();
      } else {
        clicks.pop();
        clickPyramid[row][position] = 0;
        runningTotal /= this.state.pyramid[row][position];
      }
    }
    this.setState({clickPyramid: clickPyramid, runningTotal: runningTotal, clicks: clicks}, () => {
      console.log('clicks', this.state.clicks, 'this click', row, position)
    });
  }

  clickPyramidBuilder() {
    const clickPyramid = [];
    for (let index = 0; index < this.props.pyramid.length; index ++) {
      let clickRow = new Array(this.props.pyramid[index].length).fill(0);
      clickPyramid.push(clickRow);
    }
    clickPyramid[0][0] = 1;
    this.setState({clickPyramid: clickPyramid});
  }

  componentDidMount() {
    this.clickPyramidBuilder()
  }
  //need to feed column numer and index number to click handler
  render() {
    return (
      <div>
        <div>{this.state.pyramid.map((row, index) => <PuzzleRow onClick={this.nodeClick} index={index} key={index} build={false} spaces={row} />)}</div>
        <GameTextFieldHolder>
          <GameTextFields>
            Moves: {this.state.moves}
          </GameTextFields>
          <GameTextFields>
            Running Total: {this.state.runningTotal}
          </GameTextFields>
          <GameTextFields>
            Goal: {this.props.goal}
          </GameTextFields>
        </GameTextFieldHolder>
        <ShowAnswerButtonHolder>
          <ShowAnswerButton onClick={this.showAnswer}>Show me the Answer!</ShowAnswerButton>
        </ShowAnswerButtonHolder>
      </div>
      )
  }
}

export default PuzzleGame;