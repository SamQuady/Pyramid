import React from 'react';
import PuzzleInputNode from './puzzle-input-node.jsx';
import PuzzleRegularNode from './puzzle-regular-node.jsx';

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
        <div>{this.props.spaces.map((space, index) => <PuzzleInputNode row={this.props.index} onChange={this.handleChange} index={index} key={index}/>)}</div>
      )
    } else {
      return (
        <div>{this.props.spaces.map((space, index) => <PuzzleRegularNode row={this.props.index} onClick={this.handleClick} value={space} index={index} key={index}/>)}</div>
      )
    }
  }
}

export default PuzzleRow;