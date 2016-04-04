import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

const Form = ({fields}) => {
  let list = fields.map((field) => {
    return (
      <div styleName="input-group" key={field.id}>
        <label htmlFor={field.id}>{field.label}</label>
        <input styleName="input" type={field.type} id={field.id} />
      </div>
    )
  })
  return (
    <form>
      { list }
    </form>
  )
}

export default CSSModules(Form, styles)
