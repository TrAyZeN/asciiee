import React from 'reactn';
import './style.scss';

class Editor extends React.PureComponent {
  constructor() {
    super();

    this.saveFrames = this.saveFrames.bind(this);
    this.handleFrameChange = this.handleFrameChange.bind(this);
    this.handleFrameIndexChange = this.handleFrameIndexChange.bind(this);
  }

  handleFrameIndexChange(event) {
    event.persist();

    this.dispatch.changeFrameIndex(parseInt(event.target.value)-1);
  }

  saveFrames() {
    let element = document.createElement("a");
    element.download = "frames.txt";
    element.href = `data:text/plain;charset=utf-8,${encodeURIComponent(this.formatFrames())}`;

    element.click();
  }

  // format frames to save them in a file
  formatFrames() {
    return this.global.frames.join("\n=========================================\n");
  }

  handleFrameChange(event) {
    event.persist();

    this.dispatch.updateFrame(event.target.value);
  }

  render() {
    return (
      <div className="Editor-div">
        <textarea
          className="Editor-area"
          autoComplete="off"
          cols="40"
          rows="20"
          value={this.global.frames[this.global.frameIndex]}
          onChange={this.handleFrameChange}
        />

        <div className="Editor-options">
          <button
            onClick={this.dispatch.addFrame}>
            add
          </button>

          <button
            onClick={this.dispatch.removeFrame}>
            remove
          </button>

          <input
            type="number"
            value={this.global.frameIndex+1}
            min="1"
            max={this.global.frameCount}
            onChange={this.handleFrameIndexChange}
          />

          <button
            onClick={this.saveFrames}>
            save
          </button>
        </div>
      </div>
    );
  }
}

export default Editor;
