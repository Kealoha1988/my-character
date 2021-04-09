import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <nav>
        <div className="navBar">
          <center><h1 className="selectorText">my character</h1></center>
          <div className="navButtons">
          <Link to='/'><button className="button">home</button></Link>
          <Link to='/characters'><button className="button">all characters</button></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
