import React from 'react'
import classes from './AngularJS.css'
import Wrapper from '../../UI/Wrapper/Wrapper';
import AngularIMG from '../../ASSETS/Angular.png'

export default () => {
  return (
    <div className={classes.AngularJS}>
      <Wrapper>
        <h1>
          AngularJS
          <img src={AngularIMG} alt="ReactJS" srcset=""/>
        </h1>
        <p>Istotą blockchain jest utrzymanie wspólnej i zbiorowej księgi rachunkowej transakcji, w postaci cyfrowej, rozproszonej po całej sieci, w takich samych kopiach. Technologia ta opiera się na sieci peer-to-peer bez centralnych komputerów, systemów zarządzających i weryfikujących transakcje. Każdy komputer w sieci może brać udział w przesyłaniu i uwierzytelnianiu transakcji. W przypadku blockchain będą to bloki w ramach księgi transakcji. Księga jest otwarta dla wszystkich, ale w pełni zabezpieczona przed niepowołanym dostępem przez skomplikowane narzędzia kryptograficzne. Użytkownik ma wgląd tylko w swoje transakcje. Dzięki temu zapisowi, transakcje są publiczne, ale dostępne tylko w ramach praw dostępu dla danego użytkownika i całą ich historię, od samego początku istnienia blockchain aż po dziś dzień, można przejrzeć i zweryfikować.</p>
      </Wrapper>
    </div>
  )
}
