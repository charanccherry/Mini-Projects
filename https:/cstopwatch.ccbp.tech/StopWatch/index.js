import {Component} from 'react'

import './index.css'

class StopWatch extends Component {
  state = {
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStart = () => {
    this.timeInterval = setInterval(this.updateTime, 100)
  }

  onClickStop = () => {
    clearInterval(this.timeInterval)
  }

  onClickReset = () => {
    this.setState({timeElapsedInSeconds: 0})
    clearInterval(this.timeInterval)
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)
    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  render() {
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="stopwatch">
        <div className="stopwatch-app">
          <h1 className="heading">Stopwatch</h1>
          <div className="stopwatch-cont">
            <div className="stopwatch-timer">
              <img
                className="stopwatch-icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="timer"
              />
              <p className="stopwatch-text">Timer</p>
            </div>
            <h1 testid="timer" className="time">
              {time}
            </h1>
            <div className="stopwatch-buttons">
              <button
                className="button startBtn"
                type="button"
                onClick={this.onClickStart}
              >
                Start
              </button>
              <button
                className="button stopBtn"
                type="button"
                onClick={this.onClickStop}
              >
                Stop
              </button>
              <button
                className="button resetBtn"
                type="button"
                onClick={this.onClickReset}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default StopWatch
