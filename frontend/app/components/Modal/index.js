import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

const Modal = ({children, visibility}) => {
  let style = { visibility: visibility }
  return (
    <div styleName="backdrop" style={style}>
      <div styleName="card">
        {children}
      </div>
    </div>
  )
}

export default CSSModules(Modal, styles)
