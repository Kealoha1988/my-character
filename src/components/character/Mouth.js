import React from 'react'

export default function Mouth(props) {

  const mouth = ["normal mouth", "big mouth", "small mouth", "smiley mouth", "angry mouth"] 
  
  return (
    <div>
      <h4 className="mouth">{mouth[props.index]}</h4>
    </div>
  )
}



