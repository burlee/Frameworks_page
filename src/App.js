import React, { Component } from 'react';
import Aux from './HOC/aux_x';
import MainCore from './Components/MainCore/MainCore';
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Aux>
        <BrowserRouter>
          <MainCore/>
        </BrowserRouter>
      </Aux>
    );
  }
}

export default App;
