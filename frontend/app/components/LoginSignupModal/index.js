import React from 'react'
import Modal from 'react-modal'

import LoginForm from 'components/LoginForm'
import SignupForm from 'components/SignupForm'

class LoginSignupModal extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let customStyle = {
      overlay: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      },
      content: {
        position: "relative",
        width: "300px"
      }
    }
    let form;
    switch (this.props.type) {
      case "login":
        form = <LoginForm changeLoginSignupForm={ this.props.changeLoginSignupForm} />
        break
      case "signup":
        form = <SignupForm changeLoginSignupForm={ this.props.changeLoginSignupForm } />
        break
    }
    return (
      <Modal
        isOpen={ this.props.isOpen }
        onRequestClose={ this.props.onRequestClose }
        style={ customStyle }>
        { form }
      </Modal>
    )
  }
}

export default LoginSignupModal
