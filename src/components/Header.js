import React from 'react'
 
const Header = ({ children }) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between">
    <a className="navbar-brand">Calendar</a>
    {children}

  </nav>
)

 
export default Header