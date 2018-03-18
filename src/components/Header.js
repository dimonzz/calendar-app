import React from 'react'
import { Text } from 'react-internationalization'
 
const Header = ({ children }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
    <a className="navbar-brand"><Text id="global.title"></Text></a>
    {children}

  </nav>
)

 
export default Header