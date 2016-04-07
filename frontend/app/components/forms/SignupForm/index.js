import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

import Button from 'components/Button'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <div styleName="input-group">
            <label htmlFor="signup-username">Username</label>
            <input styleName="input" type="text" id="signup-username" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-email">Email</label>
            <input styleName="input" type="text" id="signup-email" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-password">Password</label>
            <input styleName="input" type="password" id="signup-password" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-verify-password">Verify Password</label>
            <input styleName="input" type="password" id="signup-verify-password" />
          </div>
          <Button type={"primary"} text={"Submit"} />
        </form>
        <p styleName="switch">Already have an account?
          <a href="#"
            onClick={ this.props.changeLoginSignupForm.bind(this, "login") }>
            Sign in
          </a>
        </p>
      </div>
    )
  }
}

export default CSSModules(SignupForm, styles)
