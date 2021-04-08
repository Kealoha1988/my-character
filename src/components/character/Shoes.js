import React from 'react'

export default function Shoes(props) {
  return (
    <div>
      <h4 className="shoes">{props.attributes[props.index]}</h4>
    </div>
  )
}
