import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

import LoginSignupModal from 'components/modals/LoginSignupModal'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loginSignupModalIsOpen: false,
      loginSignupModalType: "signup"
    }
    this.openLoginSignupModal = this.openLoginSignupModal.bind(this)
    this.closeLoginSignupModal = this.closeLoginSignupModal.bind(this)
    this.changeLoginSignupForm = this.changeLoginSignupForm.bind(this)
  }
  openLoginSignupModal(type) {
    this.setState({
      loginSignupModalIsOpen: true,
      loginSignupModalType: type
    })
  }
  closeLoginSignupModal(type) {
    this.setState({
      loginSignupModalIsOpen: false,
      loginSignupModalType: type
    })
  }
  changeLoginSignupForm(type) {
    this.setState({ loginSignupModalType: type })
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
            onClick={ this.openLoginSignupModal.bind(this, "login")}>
            Login</a>
          <button
            onClick={ this.openLoginSignupModal.bind(this, "signup")}>
            Signup</button>
        </div>
        <LoginSignupModal
          isOpen={ this.state.loginSignupModalIsOpen }
          onRequestClose={ this.closeLoginSignupModal}
          changeLoginSignupForm={ this.changeLoginSignupForm }
          type={ this.state.loginSignupModalType }/>
      </nav>
    )
  }
}

export default CSSModules(Navbar, styles)
