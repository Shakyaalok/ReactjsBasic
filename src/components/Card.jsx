import React from 'react'
import './Card.css'

const Card = (props) => {

    const classes = 'card '+props.className
  return (
    <div className={classes}>
        {/* we do as below then some the styling will be missing so we can alos extract the styling using props.className and add it in {} */}
      {props.children}   
      {/* the value of this children will be whatever is inside in it or Card Wrapper */}
    </div>
  )
}

export default Card
