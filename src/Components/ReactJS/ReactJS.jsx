import React from 'react';

import ReactIMG from '../../ASSETS/ReactJS.png';
import Advantages from '../../UI/Advantages/Advantages';
import Wrapper from '../../UI/Wrapper/Wrapper';
import classes from './ReactJS.css';

export default () => {
  return (
    <div className={classes.ReactJS}>
      <Wrapper>
        <h1>
          ReactJS
          <img src={ReactIMG} alt="ReactJS" srcset=""/>
        </h1>
        <p>Biblioteka za pomocą której jesteśmy w stanie budować interfejsy użytkownika.Za stworzenie biblioteki odpowiada Facebook.</p>
        <Advantages>
          <h3>Zalety</h3>
          <li>Świetne community</li>
          <li>Za biblioteką stoi sam FaceBook</li>
          <li>Możliwości wydajnościowe (Wirtualny dom)</li>
          <li>Możliwość budowania aplikacji z komponentów</li>
        </Advantages>
      </Wrapper>
    </div>
  )
}
