import React from 'react';
import './header.css';

function Header () {
  return(
  <header className="header">
    <img src="D:\IIT-Delhi\AINA\Benevlent Fund\logo.jpg" alt="IITD logo" className="image"></img>
    <b><div id="head">IIT DELHI BENEVOLENT FUND</div></b>
    <div id="subhead">Helping others is the way we help ourselves!</div>
    <a style={{textDecoration:'none'}} href="" className="Links">Home</a>
    <a style={{textDecoration:'none'}} href="" className="Links">About</a>
    <a style={{textDecoration:'none'}} href="" className="Links">Contribute</a>
    <div id="para">
    <i>"The <b>IIT Delhi Benevolent Fund</b> is an institutional setup to financially support the <b>campus workers</b> (hostel shop workers, night mess workers or washermen etc.)
    who are not employed under contract. With the campus shut, they no longer have a means of livelihood. These workers help us sustain in the campus by providing
    services for our daily needs - it is, now, upon the <b>student community to support them, when they most need us! </b>"</i>
    </div>
  </header>
  )
}

export default Header;
