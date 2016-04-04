import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

import UserLogin from 'components/UserLogin'
import UserNew from 'components/UserNew'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginModal: false,
      signupModal: false
    }
    this.toggleLoginModal = this.toggleLoginModal.bind(this)
    this.toggleSignupModal = this.toggleSignupModal.bind(this)
  }
  toggleLoginModal(visible, e) {
    e.stopPropagation()
    this.setState({
      loginModal: visible ? false : true
    })
  }
  toggleSignupModal(visible, e) {
    this.setState({
      signupModal: visible ? false : true
    })
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
            onClick={ this.toggleLoginModal.bind(this, this.state.loginModal) }>
            Login</a>
          <button
            id="navbar-signup-button"
            onClick={ this.toggleSignupModal.bind(this, this.state.signupModal) }>
            Signup</button>
        </div>
        <UserLogin
          visible={ this.state.loginModal }
          close={ this.toggleLoginModal } />
        <UserNew
          visible={ this.state.signupModal }
          close={ this.toggleSignupModal } />
      </nav>
    )
  }
}

export default CSSModules(Navbar, styles)
