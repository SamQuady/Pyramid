import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      entry: true,
      createAPuzzle: false,
      getAPuzzle: false,
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
    if (this.state.entry) {
      return (
        <div>
          <div>
            <h1>Welcome to the Pyramid Descent Puzzle Game!</h1>
            <h3>Wanna Play?</h3>
          </div>
          <div>
            <button onClick={this.createAPuzzle}>Build Your Own Puzzle!</button><button>Let Us Choose One For You!</button>
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
      </div>
      )
    }
  }
}

export default App;