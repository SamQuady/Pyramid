import React from 'react';
import PuzzleInputNode from './puzzle-input-node.jsx';
import PuzzleRegularNode from './puzzle-regular-node.jsx';
import styled from 'styled-components';

const PuzzleRowHolder = styled.div`
text-align: center;
`;

class PuzzleRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {row: this.props.spaces};
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(index) {
    let row = this.state.row;
    row[index] = Number(event.target.value);
    this.setState({row: row});
    this.props.onChange(this.props.index, this.state.row);
  }

  handleClick(column) {
    this.props.onClick(this.props.index, column);
  }

  render() {
    if (this.props.build) {
      return (
        <PuzzleRowHolder>{this.props.spaces.map((space, index) => <PuzzleInputNode row={this.props.index} onChange={this.handleChange} index={index} key={index}/>)}</PuzzleRowHolder>
      )
    } else {
      return (
        <PuzzleRowHolder>{this.props.spaces.map((space, index) => <PuzzleRegularNode validClicks={this.props.validClicks} row={this.props.index} onClick={this.handleClick} value={space} index={index} key={index}/>)}</PuzzleRowHolder>
      )
    }
  }
}

export default PuzzleRow;