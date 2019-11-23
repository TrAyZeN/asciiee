import React from 'react';
import './style.scss';

class Viewer extends React.Component {
  constructor() {
    super();

    this.state = {
      interval: 20,
      loop: false
    };
  }

  render() {
    return (
      <div>
        <div className="Viewer-buttons">
          <button>play</button>
          <button>loop</button>
          <button>interval</button>
        </div>

        <textarea
          className="Viewer-area"
          autoComplete="off"
          cols="40"
          rows="20"
        />
      </div>
    );
  }
}

export default Viewer;
