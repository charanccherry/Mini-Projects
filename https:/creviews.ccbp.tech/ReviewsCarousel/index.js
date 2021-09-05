import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    activeReviewIndex: 0,
  }

  onClickRightArrow = () => {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props

    if (activeReviewIndex < reviewsData.length - 1) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex + 1,
      }))
    }
  }

  onClickLeftArrow = () => {
    const {activeReviewIndex} = this.state

    if (activeReviewIndex > 0) {
      this.setState(prevState => ({
        activeReviewIndex: prevState.activeReviewIndex - 1,
      }))
    }
  }

  renderReviewData = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="userName-details">
        <img
          src={imgUrl}
          alt={`${username}-avatar`}
          className="userName-avatar"
        />
        <p className="name-head">{username}</p>
        <p className="company">{companyName}</p>
        <p className="company">{description}</p>
      </div>
    )
  }

  render() {
    const {activeReviewIndex} = this.state
    const {reviewsData} = this.props
    const activeReviewData = reviewsData[activeReviewIndex]

    return (
      <div className="review-cont">
        <h1 className="review-head">Reviews</h1>
        <div className="review-details">
          <button
            type="button"
            onClick={this.onClickLeftArrow}
            testid="leftArrow"
            className="slide-image"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left-arrow"
            />
          </button>
          {this.renderReviewData(activeReviewData)}
          <button
            type="button"
            onClick={this.onClickRightArrow}
            testid="rightArrow"
            className="slide-image"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
