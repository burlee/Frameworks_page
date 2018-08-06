import React from 'react'
import classes from './AngularJS.css'
import Wrapper from '../../UI/Wrapper/Wrapper';
import AngularIMG from '../../ASSETS/Angular.png'
import Advantages from '../../UI/Advantages/Advantages';

export default () => {
  return (
    <div className={classes.AngularJS}>
      <Wrapper>
        <h1>
          AngularJS
          <img src={AngularIMG} alt="AngularJS"/>
        </h1>
        <p>Pełnoprawny framework udostępniający nam wszystkie narzędzia i zależności do budowania aplikacji.</p>
        <Advantages>
          <h3>Zalety i wady:</h3>
          <li>Angular jest wspierany przez Google</li>
          <li>Używany do największych projektów</li>
          <li>Najcięższy do nauki</li>
        </Advantages>
      </Wrapper>
    </div>
  )
}
