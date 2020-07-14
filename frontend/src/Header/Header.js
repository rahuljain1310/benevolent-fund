import React from 'react';
import './header.css';

function Header () {
  return(
  <header className="header">
    <img src="D:\IIT-Delhi\AINA\Benevlent Fund\logo.jpg" alt="IITD logo" className="image"></img>
    <br/><br/><br/><br/><br/>
    <b><div id="head">IIT DELHI BENEVOLENT FUND</div></b>
    <i><div id="subhead">Helping others is the way we help ourselves !</div></i><br/>
    <form>
      <input type="button" value="HOME" className="buttons" onClick="window.location.href=''"></input>
      <input type="button" value="ABOUT" className="buttons" onClick="window.location.href=''"></input>
      <input type="button" value="CONTRIBUTE" className="buttons" onClick="window.location.href=''"></input>
      <input type="button" value="READ" className="buttons" onClick="window.location.href=''"></input>
    </form>
    <div id="para">
    The <b>IIT Delhi Benevolent Fund</b> is an institutional setup to financially support the <b>campus workers</b><i> (hostel shop workers, night mess workers or washermen etc.) </i>
    who are not employed under contract. With the campus shut, they no longer have a means of livelihood. These workers help us sustain in the campus by providing
    services for our daily needs - it is, now, upon the <b>student community to support them, when they most need us! </b>
    </div>
  </header>
  )
}

export default Header;
