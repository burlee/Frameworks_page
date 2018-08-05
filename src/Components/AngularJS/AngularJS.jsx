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
          <img src={AngularIMG} alt="AngularJS" srcset=""/>
        </h1>
        <p>Pełnoprawny framework udostępniający nam wszystkie narzędzia do budowania aplikacji.</p>
        <Advantages>
          <h3>Zalety</h3>
          <li>Angular jest wspierany przez Google</li>
          <li>Pełnoprawny framework</li>
        </Advantages>
      </Wrapper>
    </div>
  )
}
