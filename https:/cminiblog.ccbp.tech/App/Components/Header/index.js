import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-cont">
    <div className="first-part">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave"
      />
      <p className="wave-name">Wave</p>
    </div>
    <div className="second-part">
      <p className="second-wave-text">
        <Link className="hyper-link" to="/">
          Home
        </Link>
      </p>
      <p className="second-wave-text">
        <Link className="hyper-link" to="/about">
          About
        </Link>
      </p>
      <p className="second-wave-text">
        <Link className="hyper-link" to="/contact">
          Contact
        </Link>
      </p>
    </div>
  </nav>
)
export default Header
