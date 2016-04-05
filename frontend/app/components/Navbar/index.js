import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

import UserLogin from 'components/UserLogin'
import UserNew from 'components/UserNew'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginModalIsOpen: false,
      signupModalIsOpen: false
    }
    this.openLoginModal = this.openLoginModal.bind(this)
    this.openSignupModal = this.openSignupModal.bind(this)
    this.closeLoginModal = this.closeLoginModal.bind(this)
    this.closeSignupModal = this.closeSignupModal.bind(this)
  }
  openLoginModal() {
    this.setState({ loginModalIsOpen: true })
  }
  openSignupModal() {
    this.setState({ signupModalIsOpen: true })
  }
  closeLoginModal() {
    this.setState({ loginModalIsOpen: false })
  }
  closeSignupModal() {
    this.setState({ signupModalIsOpen: false })
  }
  render() {
    return (
      <nav styleName="navbar">
        <div styleName="logo-container">
          <h1 styleName="logo">LOGO</h1>
          <span styleName="sub-heading">The unofficial news source for the Phoenix Framework.</span>
        </div>
        <div styleName="filter-container">
          <input placeholder="Search" />
          <select name="Filter">
            <option value="1">Option</option>
          </select>
        </div>
        <div styleName="login-container">
          <a href="#"
            id="navbar-login-link"
            onClick={ this.openLoginModal }>
            Login</a>
          <button
            id="navbar-signup-button"
            onClick={ this.openSignupModal }>
            Signup</button>
        </div>
        <UserLogin
          isOpen={ this.state.loginModalIsOpen }
          onRequestClose={ this.closeLoginModal } />
        <UserNew
          isOpen={ this.state.signupModalIsOpen }
          onRequestClose={ this.closeSignupModal } />
      </nav>
    )
  }
}

export default CSSModules(Navbar, styles)
