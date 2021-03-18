import React from 'react';
import PuzzleInputNode from './puzzle-input-node.jsx';

class PuzzleRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {row: this.props.spaces};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(index) {
    let row = this.state.row;
    row[index] = Number(event.target.value);
    this.setState({row: row});
    this.props.onChange(this.props.index, this.state.row);
  }

  render() {
    if (this.props.build) {
      return (
        <div>{this.props.spaces.map((space, index) => <PuzzleInputNode onChange={this.handleChange} index={index} key={index}/>)}</div>
      )
    }
  }
}

export default PuzzleRow;