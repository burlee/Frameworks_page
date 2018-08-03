import React from 'react'
import classes from './Advantages.css'

export default (props) => {
  return (
    <div className={classes.Advantages}>
      <ul>
          {props.children}
      </ul>
    </div>
  )
}
