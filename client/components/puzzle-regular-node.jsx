import React from 'react';
import styled from 'styled-components';

const Node = styled.button`
background-color: white;
width: 100px;
height: 100px;
border-radius: 100%;
border-style: solid;
border-color: rgb(184, 184, 184);
border-width: 4px;
color: rgb(41, 41, 41);
cursor: pointer;
font-size: 20px;
&:hover {box-shadow: inset 0 0 10px #000000;}
`;

const ClickedNode = styled.button`
background-color: rgb(230, 230, 230);
width: 100px;
height: 100px;
border-radius: 100%;
border-style: solid;
border-color: rgb(104, 104, 104);
border-width: 4px;
color: rgb(41, 41, 41);
cursor: pointer;
font-size: 20px;
&:hover {box-shadow: inset 0 0 10px #000000;}
`;

class PuzzleRegularNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false};
  }

  render() {
    if (!this.state.clicked) {
      return (
        <Node onClick={(event)=> {
          this.setState({clicked: !this.state.clicked});
        this.props.onClick(this.props.index)}}>{this.props.value}</Node>
      );
    } else {
      return (
        <ClickedNode onClick={(event)=> {
          this.setState({clicked: !this.state.clicked});
        this.props.onClick(this.props.index)}}>{this.props.value}</ClickedNode>
      );
    }
  }
}

export default PuzzleRegularNode;