import React from 'react'

import Modal from 'components/Modal'
import Form from 'components/Form'
import Button from 'components/Button'

const UserNew = (props) => {
  return (
    <Modal visible={ props.visible } close={ props.close }>
      <Form
        fields={[
          {id: "signup-username", type: "text", label: "Username"},
          {id: "signup-email", type: "email", label: "Email"},
          {id: "signup-password", type: "password", label: "Password"},
          {id: "signup-password-verify", type: "password", label: "Verify Password"}
        ]} />
      <Button
        type="primary"
        text="Submit" />
    </Modal>
  )
}

export default UserNew
