import React from 'react'
import Francais from './francais'
import English from './English'

const Menu = () => (
  <div className="footer-link">
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
        <Francais/>
        <English/>
      </div>
    </nav>
  </div>
)

export default Menu