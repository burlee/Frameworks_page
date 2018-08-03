import React from 'react'
import classes from './ReactJS.css'
import Wrapper from '../../UI/Wrapper/Wrapper';
import ReactIMG from '../../ASSETS/ReactJS.png';
import Advantages from '../../UI/Advantages/Advantages';

export default () => {
  return (
    <div className={classes.ReactJS}>
      <Wrapper>
        <h1>
          ReactJS
          <img src={ReactIMG} alt="ReactJS" srcset=""/>
        </h1>
        <p>Istotą blockchain jest utrzymanie wspólnej i zbiorowej księgi rachunkowej transakcji, w postaci cyfrowej, rozproszonej po całej sieci, w takich samych kopiach. Technologia ta opiera się na sieci peer-to-peer bez centralnych komputerów, systemów zarządzających i weryfikujących transakcje. Każdy komputer w sieci może brać udział w przesyłaniu i uwierzytelnianiu transakcji. W przypadku blockchain będą to bloki w ramach księgi transakcji. Księga jest otwarta dla wszystkich, ale w pełni zabezpieczona przed niepowołanym dostępem przez skomplikowane narzędzia kryptograficzne. Użytkownik ma wgląd tylko w swoje transakcje. Dzięki temu zapisowi, transakcje są publiczne, ale dostępne tylko w ramach praw dostępu dla danego użytkownika i całą ich historię, od samego początku istnienia blockchain aż po dziś dzień, można przejrzeć i zweryfikować.</p>
        <Advantages>
          <h3>Zalety</h3>
          <li>Jeden</li>
          <li>Dwa</li>
          <li>Trzy</li>
        </Advantages>
      </Wrapper>
    </div>
  )
}
