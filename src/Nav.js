import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Nav(props) {

  const [music, setMusic] = useState(true)

  const toggleMusic = () => {
    if (music == true ){
      return "music off"
    }else{
      return "music on"
    }
  } 


  const routerTrick = () => `/user/${props.cool}/characters`

  const userSignedIn = () => {
    if (props.cool !== "noUser"){
      return <>
      <Link to={routerTrick}><button className="navButton-style">my characters</button></Link>
      <Link to='/messages'><button className="navButton-style">messages</button></Link>
      </>
    }
  }


  return (
    <div>
      <nav>
        <div className="navBar">
          <center><h1 className="selectorText">my character</h1></center> 
          <div className="navButtons">
          <Link to='/'><button className="navButton-style">home</button></Link>
          <Link to='/characters'><button className="navButton-style">all characters</button></Link>
          <button>music</button>
          </div>
          <div className="myCharacterButton">
          {userSignedIn()}
          </div>
        </div>
      </nav>
    </div>
  )
}
