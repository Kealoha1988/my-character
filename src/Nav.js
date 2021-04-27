import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {

  const routerTrick = () => `/user/${props.cool}/characters`


  return (
    <div>
      <nav>
        <div className="navBar">
          <center><h1 className="selectorText">my character</h1></center>
          <div className="navButtons">
          <Link to='/'><button className="navButton-style">home</button></Link>
          <Link to='/characters'><button className="navButton-style">all characters</button></Link>
          </div>
          <div className="myCharacterButton">
          <Link to={routerTrick}><button className="navButton-style">my characters</button></Link>
          </div>
        </div>
      </nav>
    </div>
  )
}
