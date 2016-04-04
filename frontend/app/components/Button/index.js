import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

const Button = ({type, text}) => {
  return (
    <div styleName={type}>
      { text }
    </div>
  )
}

export default CSSModules(Button, styles)
