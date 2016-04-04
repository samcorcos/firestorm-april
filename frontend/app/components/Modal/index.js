import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

const Modal = ({children, visible, close}) => {
  let style = { visibility: visible ? "visible" : "hidden" }
  return (
    <div
      styleName="backdrop"
      style={style}
      onClick={close.bind(this, null)} >
      <div styleName="card">
        {children}
      </div>
    </div>
  )
}

export default CSSModules(Modal, styles)
