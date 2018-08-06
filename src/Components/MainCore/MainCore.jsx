import React, { Component } from 'react';
import classes from './MainCore.css';
import Main from '../Main/Main';
import Aux from '../../HOC/aux_x'
import { Route, NavLink, Switch } from 'react-router-dom'
import ReactJS from '../ReactJS/ReactJS';
import AngularJS from '../AngularJS/AngularJS';
import Vue from '../Vue/Vue';

export default class MainCore extends Component {
    state = {
        CurrentColor: '#4CAF50',
        BackgroundColor: '#FFFFFF',
        MainHeight: 100,
        MainWidth: 100,
        MainIsToggle: false,
        showInfo: false
    }

    resizeMainDivToggle = () => {
        this.setState({
            MainHeight: 85,
            MainWidth: 90,
            MainIsToggle: true,
            BackgroundColor: '#c8c8c8',
            CurrentColor: '#000000'
        });
        if(this.state.MainIsToggle){
            this.setState({
                MainHeight: 100,
                MainWidth: 100,
                MainIsToggle: false,
                BackgroundColor: '#FFFFFF',
                CurrentColor: '#4CAF50'
            })
        }
    }
    frameworkInformationToggle = () => {
        this.setState({showInfo: !this.state.showInfo})
    }
    render() {
        return (
            <Aux>
                <main className={classes.MainCore}>
                    <NavLink className={classes.TopLink}  to="/reactjs">ReactJS</NavLink>
                    <NavLink className={classes.RightLink}  to="/angularjs">AngularJS</NavLink>
                    <NavLink className={classes.LeftLink}  to="/vue">VueJS</NavLink>

                    {this.state.showInfo ? null
                    : <a onClick={this.frameworkInformationToggle} className={classes.BottomLink}>Czym jest framework?</a>
                    }

                    {this.state.showInfo ? 
                    <p onClick={this.frameworkInformationToggle} className={classes.BottomLink}>Jest narzędziem wspomagającym i przyśpieszającym budowanie naszej aplikacji</p>
                    : null }
                    <Main 
                        BackgroundColor={this.state.BackgroundColor} 
                        MainIsToggle={this.state.MainIsToggle} 
                        resizeMainDivToggle={this.resizeMainDivToggle} 
                        MainWidth={this.state.MainWidth} 
                        MainHeight={this.state.MainHeight}
                        CurrentColor={this.state.CurrentColor}
                    />
                </main>

                <Switch>
                    <Route path='/reactjs' component={ReactJS} />
                    <Route path='/angularjs' component={AngularJS} />
                    <Route path='/vue' component={Vue} />
                </Switch>
            </Aux>
        )
    }
}
