import React from 'reactn';
import './style.scss';

class Player extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      interval: 200,
      loop: false,
      isPlaying: false,
      currentFrame: "",
      intervalId: null
    };

    this.play = this.play.bind(this);
    this.loop = this.play.bind(this);
    this.handleIntervalChange = this.handleIntervalChange.bind(this);
  }

  play() {
    if (this.state.isPlaying) {
      clearInterval(this.state.intervalId);
      this.setState({ isPlaying: false });
    }
    else {
      let i = 0;

      let id = setInterval(() => {
        this.setState({ currentFrame: this.global.frames[i++ % this.global.frameCount] });

        if (this.state.loop && i % this.global.frameCount === 0)
          clearInterval(id);
      }, this.state.interval);

      this.setState({ isPlaying: true, intervalId: id });
    }
  }

  loop() {
    // this.setState({ loop: !this.state.loop });
  }

  handleIntervalChange(event) {
    this.setState({ interval: event.target.value });
  }

  render() {
    return (
      <div className="Player">
        <textarea
          className="Player-area"
          autoComplete="off"
          cols="40"
          rows="20"
          readOnly
          value={this.state.currentFrame}
        />

        <div className="Player-buttons">
          <div className="Player-play-loop">
            <button
              onClick={this.play}>
              play
            </button>

            <button
              onClick={this.loop}>
              loop
            </button>
          </div>

          <p>Interval (in ms): </p>
          <input
            type="number"
            min="10"
            max="2000"
            onChange={this.handleIntervalChange}
            value={this.state.interval}
          />
        </div>
      </div>
    );
  }
}

export default Player;
