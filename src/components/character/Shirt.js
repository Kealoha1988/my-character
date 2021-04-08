import React from 'react'

export default function Shirt(props) {

  const shirt = ["shirt1", "shirt2", "shirt3", "shirt4", "shirt5"]

  return (
    <div>
      <h4 className="shirt">{shirt[props.index]}</h4>
    </div>
  )
}
