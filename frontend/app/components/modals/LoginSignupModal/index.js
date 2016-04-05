import React from 'react'
import Modal from 'react-modal'

import LoginForm from 'components/forms/LoginForm'
import SignupForm from 'components/forms/SignupForm'

class LoginSignupModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let form = this.props.type === "login" ? <LoginForm /> : <SignupForm />
    return (
      <Modal
        isOpen={ this.props.isOpen }
        onRequestClose={ this.props.onRequestClose }>
        { form }
      </Modal>
    )
  }
}

export default LoginSignupModal
