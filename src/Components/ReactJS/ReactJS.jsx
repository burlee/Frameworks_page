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
          <img src={ReactIMG} alt="ReactJS"/>
        </h1>
        <p>Biblioteka za pomocą której jesteśmy w stanie budować interfejsy użytkownika, biorąc pod uwagę cały jego ekosystem śmiało można stwierdzić, że jest frameworkiem.Za stworzenie biblioteki odpowiada Facebook.</p>
        <Advantages>
          <h3>Zalety i wady:</h3>
          <li>Świetne community oraz ekosystem</li>
          <li>Za biblioteką stoi FaceBook</li>
          <li>Możliwości wydajnościowe (Wirtualny dom)</li>
          <li>Do wad można zaliczyć czasochłonne tworzenie boilerplatu</li>
        </Advantages>
      </Wrapper>
    </div>
  )
}
