import React, { Component } from 'react';
import classes from './MainCore.css';
import Main from '../Main/Main';
import Aux from '../../HOC/aux_x'
import { Route, NavLink, Switch } from 'react-router-dom'
import BlockchainExplain from '../BlockchainExplainComponent/BlockchainExplain';
import CryptoCurrency from '../CryptoCurrency/CryptoCurrency';

export default class MainCore extends Component {
    state = {
        CurrentColor: '#4CAF50',
        BackgroundColor: '#FFFFFF',
        MainHeight: 100,
        MainWidth: 100,
        MainIsToggle: false
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

    render() {
        return (
            <Aux>
                <main className={classes.MainCore}>
                    <NavLink className={classes.TopLink}  to="/czym-jest-blockchain">ReactJS</NavLink>
                    <NavLink className={classes.RightLink}  to="/kryptowaluty">AngularJS</NavLink>
                    <a className={classes.LeftLink} href="#///">Czym jest Bitcoin?</a>
                    {/* <a className={classes.RightLink} href="#///">Kryptowaluty</a> */}
                    <a className={classes.BottomLink} href="#///">Giełdy</a>
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
                    <Route path='/czym-jest-blockchain' component={BlockchainExplain} />
                    <Route path='/kryptowaluty' component={CryptoCurrency} />
                </Switch>
            </Aux>
        )
    }
}
