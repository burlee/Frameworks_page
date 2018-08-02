import React from 'react'
import classes from './Wrapper.css'
import Footer from '../Footer/Footer';

export default (props) => {
    return (
        <div className={classes.Wrapper}>
            {props.children}
            <Footer />
        </div>
    )
}
