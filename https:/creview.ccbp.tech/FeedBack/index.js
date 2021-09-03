import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  isFeedbackSelected = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedBackQuestion = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData
    return (
      <div className="feedbackQuesCont">
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="emojis-cont">
          {emojis.map(emoji => (
            <li
              key={emoji.id}
              className="emoji-detail"
              onClick={this.isFeedbackSelected}
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
              <p className="emoji-text">{emoji.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedbackReview = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData

    return (
      <div className="review-cont">
        <img src={loveEmojiUrl} alt="loveEmojiUrl" className="loveEmojiUrl" />
        <h1 className="thank-head">Thank You</h1>
        <p className="thank-text">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="app-cont">
        <div className="app-card">
          {isFeedbackSelected
            ? this.renderFeedbackReview()
            : this.renderFeedBackQuestion()}
        </div>
      </div>
    )
  }
}
export default Feedback
