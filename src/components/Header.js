import React from 'react'
 
const Header = ({ children }) => (
  <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
    <a class="navbar-brand" href="#">Calendar</a>
    {children}

  </nav>
)

 
export default Header