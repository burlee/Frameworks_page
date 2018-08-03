import React, { Component } from 'react'
import classes from './Main.css'

export default class Main extends Component {
  render() {
    return (
      <div className={classes.Main} style={{background: this.props.BackgroundColor, width: this.props.MainWidth+'%', height: this.props.MainHeight+'%'}}>
        {this.props.MainIsToggle ? null : 
            <div onClick={this.props.resizeMainDivToggle} className={classes.Open}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        }
        {this.props.MainIsToggle ? 
        <div onClick={this.props.resizeMainDivToggle}  className={classes.Close}>
            <div></div>
            <div></div>
        </div>
        : null}
        <header>
            <h1>Frameworki <span style={{color: this.props.CurrentColor}}>JavaScript</span> </h1>
        </header>
      </div>
    )
  }
}
