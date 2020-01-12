import React from 'react';
import './style.scss';
import Editor from '../Editor';
import Player from '../Player';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            asciiee
          </h1>
          <div className="App-pannel">
            <Editor />
            <Player />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
