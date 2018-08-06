import React from 'react';
import VueIMG from '../../ASSETS/pobrane.png';
import Advantages from '../../UI/Advantages/Advantages';
import Wrapper from '../../UI/Wrapper/Wrapper';
import classes from './Vue.css';

export default () => {
  return (
    <div className={classes.Vue}>
      <Wrapper>
        <h1>
          VueJS
          <img src={VueIMG} alt="ReactJS"/>
        </h1>
        <p>Vue, framework który zyskał olbrzymią popularność i na pewno zostanie z nami na dłużej.</p>
        <Advantages>
            <h3>Zalety i wady:</h3>
          <li>Bardzo dobry framework do mniejszych projektów</li>
          <li>Najłatwiejszy do nauki</li>
          <li>Warstwa HTML, JavaScript oraz CSS(scoped style) w jednym pliku</li>
          <li>Rosnąca popularność</li>
          <li>Świetna dokumentacja</li>
        </Advantages>
      </Wrapper>
    </div>
  )
}
