import React from 'react';

class PuzzleInputNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
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
         <input onChange={(event) => this.props.onChange(this.props.index)} type="number"></input>
      </span>
    );
  }
}

export default PuzzleInputNode;