import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

const Button = ({type, text, onClick}) => {
  return (
    <div styleName={type} onClick={onClick}>
      { text }
    </div>
  )
}

export default CSSModules(Button, styles)
