import React from 'react'
import axios from 'axios'

import CSSModules from 'react-css-modules'
import styles from './styles'

import Button from 'components/Button'

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    // let username = e.target.username
    // let email = e.target.email
    // let password = e.target.password
    //
    // let user = {
    //   username: username.value,
    //   email: email.value,
    //   password: password.value
    // }

    let user = {
      username: 'sam',
      email: 'email@email.com',
      password: 'password'
    }

    axios.post('http://localhost:4000/api/users', {user: user})
      .then(function(res) {
        console.log(res)
        console.log("Successfully added user!")

        // Clear input values
        // username.value = ""
        // email.value = ""
        // password.value = ""

        // Save new JWT to localStorage
        localStorage.phoenix_auth_token = response.data.data.jwt
      })
      .catch(function(err) {
        alert("There was an error creating the user: " + JSON.stringify(err))
        console.log(err)
      }
    )


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
          <Button
            type={"primary"}
            text={"Submit"}
            onClick={this.handleSubmit} />
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
