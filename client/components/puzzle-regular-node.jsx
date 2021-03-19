import React from 'react';

class PuzzleRegularNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span onClick={(event)=> {this.props.onClick(this.props.index)}}>{this.props.value}</span>
    );
  }
}

export default PuzzleRegularNode;