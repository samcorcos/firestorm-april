import React from 'react'
import Modal from 'react-modal'

import Form from 'components/Form'
import Button from 'components/Button'

const UserLogin = (props) => {
  let customStyle = {
    overlay: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    content: {
      position: 'relative',
      minWidth: "300px"
    }
  }
  return (
    <Modal
      isOpen={ props.isOpen }
      onRequestClose={ props.onRequestClose }
      style={customStyle}>
      <Form
        fields={[
          {id: "login-email", type: "email", label: "Email"},
          {id: "login-password", type: "password", label: "Password"}
        ]}>
        <Button
          type="primary"
          text="Submit" />
      </Form>
    </Modal>
  )
}

export default UserLogin
