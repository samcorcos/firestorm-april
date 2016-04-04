import React from 'react'

import CSSModules from 'react-css-modules'
import styles from './styles'

import UserLogin from 'components/UserLogin'
import UserNew from 'components/UserNew'

const Navbar = () => {
  return (
    <nav styleName="navbar">
      <div styleName="logo-container">
        <h1 styleName="logo">LOGO</h1>
        <span styleName="sub-heading">The unofficial news source for the Phoenix Framework.</span>
      </div>
      <div styleName="filter-container">
        <input placeholder="Search" />
        <select name="Filter">
          <option value="1">Option</option>
        </select>
      </div>
      <div styleName="login-container">
        <a href="#">Login</a>
        <button>Signup</button>
      </div>
      <UserLogin visibility={"hidden"} />
      <UserNew visibility={"visible"} />
    </nav>
  )
}

export default CSSModules(Navbar, styles)
