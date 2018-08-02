import React from 'react';
import classes from './Footer.css';
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className={classes.Footer}>
      <NavLink to="/">Home</NavLink>
    </div>
  )
}
