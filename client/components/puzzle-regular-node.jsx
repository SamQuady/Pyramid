import React from 'react';

class PuzzleRegularNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <span>{this.props.value}</span>
    );
  }
}

export default PuzzleRegularNode;