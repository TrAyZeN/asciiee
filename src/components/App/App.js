import React from 'react';
import './style.scss';
import Viewer from '../Viewer/Viewer';
import Editor from '../Editor/Editor';

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
            <Viewer />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
