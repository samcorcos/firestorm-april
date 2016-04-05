import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <form>
          <div styleName="input-group">
            <label htmlFor="signup-email">Email</label>
            <input styleName="input" type="text" id="signup-email" />
          </div>
          <div styleName="input-group">
            <label htmlFor="signup-password">Password</label>
            <input styleName="input" type="password" id="signup-password" />
          </div>
        </form>
        <p styleName="switch">Need an account? <a href="#">Sign up</a></p>
      </div>
    )
  }
}

export default CSSModules(LoginForm, styles)
