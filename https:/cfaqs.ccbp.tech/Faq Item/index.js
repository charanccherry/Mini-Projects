import {Component} from 'react'

import './index.css'

const PLUS = 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const MINUS = 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  answerTextHover = () => {
    const {faqDetails} = this.props
    const {isActive} = this.state
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr className="seperator" />
          <p className="answerText">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onClickPlusMinus = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive ? MINUS : PLUS
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onClickPlusMinus}>
        <img src={image} className="image" alt={altText} />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails

    return (
      <li className="faq-item">
        <div className="faq-first">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.answerTextHover()}
      </li>
    )
  }
}
export default FaqItem
