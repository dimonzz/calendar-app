import React from 'react'
 
const Header = ({ children }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a className="navbar-brand" href="#">Calendar</a>
    {children}

  </nav>
)

 
export default Header