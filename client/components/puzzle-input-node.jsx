import React from 'react';
import styled from 'styled-components';

const Node = styled.input`
text-align: center;
background-color: white;
width: 90px;
height: 90px;
border-radius: 100%;
border-style: solid;
border-color: rgb(184, 184, 184);
border-width: 4px;
color: rgb(41, 41, 41);
cursor: pointer;
font-size: 20px;
&:hover {box-shadow: inset 0 0 10px #000000;}
`;

class PuzzleInputNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
      <span>
         <Node onChange={(event) => this.props.onChange(this.props.index)} type="number"></Node>
      </span>
    );
  }
}

export default PuzzleInputNode;