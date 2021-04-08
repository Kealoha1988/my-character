import React from 'react'

export default function Shoes(props) {

  const shoes = ["shoes1", "shoes2", "shoes3", "shoes4", "shoes5"]

  return (
    <div>
      <h4 className="shoes">{shoes[props.index]}</h4>
    </div>
  )
}
