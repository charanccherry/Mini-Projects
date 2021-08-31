import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDarkMode: true}

  onClickButton = () => {
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))
  }

  render() {
    const {isDarkMode} = this.state
    const modeClassName = isDarkMode ? 'darkMode' : 'lightMode'
    const buttonText = isDarkMode ? 'Light Mode' : 'Dark Mode'

    return (
      <div className={`bg-cont ${modeClassName}`}>
        <div className="card-cont">
          <img
            src="https://thumbs.dreamstime.com/b/d-human-click-here-symbol-white-background-36109920.jpg"
            alt="img"
            className="image"
            onClick={this.onClickButton}
          />
          <button className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
