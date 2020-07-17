import React from 'react';
import './header.css';
import iitdLogo from '../Assets/iitdLogo.jpg';
import SmallContributeButton from '../Pages/SmallContributeButton/SmallContributeButton';

function Header () {
  return(
  <header className="header">
    <img src={iitdLogo} alt="IIT-D Logo" id="image"></img>
    <b>
      <div id="head">IIT DELHI BENEVOLENT FUND</div>
    </b>
    <i>
      <div id="subhead">
        Helping others is the way we help ourselves!
      </div>
    </i>
    <div className="color">
        <a style={{textDecoration:'none'}} href="" className="Links">Home</a>
        <a style={{textDecoration:'none'}} href="" className="Links">About</a>
        <a style={{textDecoration:'none'}} href="" className="Links">Contribute</a>
    </div>
  </header>
  )
}

export default Header;
