import React from 'react'

import Modal from 'components/Modal'
import Form from 'components/Form'
import Button from 'components/Button'

const UserLogin = ({visibility}) => {
  return (
    <Modal visibility={visibility}>
      <Form
        fields={[
          {id: "login-email", type: "email", label: "Email"},
          {id: "login-password", type: "password", label: "Password"}
        ]} />
      <Button
        type="primary"
        text="Submit" />
    </Modal>
  )
}

export default UserLogin
