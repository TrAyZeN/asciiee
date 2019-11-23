import React from 'react';
import './style.scss';

class Editor extends React.Component {
  constructor() {
    super();

    this.state = {
      frames: [""],
      frameCount: 1,
      frameIndex: 0
    };

    this.addFrame = this.addFrame.bind(this);
    this.removeFrame = this.removeFrame.bind(this);
    this.saveFrames = this.saveFrames.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  addFrame() {
    this.setState((state) => {
      state.frames.splice(state.frameIndex+1, 0, "");

      return {
        frames: state.frames,
        frameCount: state.frameCount+1,
        frameIndex: state.frameIndex+1
      }
    });
  }

  removeFrame() {
    this.setState((state) => {
      state.frames.splice(state.frameIndex, 1);

      return {
        frames: state.frames,
        frameCount: state.frameCount-1,
        frameIndex: state.frameIndex-1
      }
    });
  }

  saveFrames() {
    console.log("Save");
    let element = document.createElement("a");
    element.download = "frames.txt";
    element.href = `data:text/plain;charset=utf-8,${encodeURIComponent(this.formatFrames())}`;

    element.click();
  }

  // format frames to save them in a file
  formatFrames() {
    return this.state.frames.join("\n=================================\n");
  }

  handleChange(event) {
    event.persist();

    this.setState((state) => {
      state.frames[state.frameIndex] = event.target.value;

      return { frames: state.frames }
    });
  }

  render() {
    return (
      <div>
        <div className="Editor-buttons">
          <button
            onClick={this.addFrame}>
            add
          </button>
          <button
            onClick={this.removeFrame}>
            remove
          </button>
          <button>
            frame
          </button>
          <button
            onClick={this.saveFrames}>
            save
          </button>
        </div>

        <textarea
          className="Editor-area"
          autoComplete="off"
          cols="40"
          rows="20"
          value={this.state.frames[this.state.frameIndex]}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Editor;
