import React from 'react'
import Modal from 'react-modal'

import Form from 'components/Form'
import Button from 'components/Button'

const UserNew = (props) => {
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
      style={ customStyle }>
      <Form
        fields={[
          {id: "signup-username", type: "text", label: "Username"},
          {id: "signup-email", type: "email", label: "Email"},
          {id: "signup-password", type: "password", label: "Password"},
          {id: "signup-password-verify", type: "password", label: "Verify Password"}
        ]}>
        <Button
          type="primary"
          text="Submit" />
      </Form>
    </Modal>
  )
}

export default UserNew
