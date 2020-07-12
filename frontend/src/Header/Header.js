import React from 'react';

function Header () {
  return(
    <header className="header">
    <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href=" ">About</a>
      <a href=" ">Contribute</a>
    </div>
    <div>
      <h1>BENEVOLENT FUND IITD </h1>
      <h2>Helping others is the way we help ourselves</h2>
      {/* <img src={iitd} alt="iitdimage" className="iitd" /> */}
    </div>
    <br /> <br />
    <p style={{textAlign: "center"}}>
      The IIT Delhi <span style={{ fontWeight : "bold"}}>Benevolent Fund</span> is an institutional setup to financially 
      support the campus workers (hostel shop workers, night mess workers or washerman etc) who are not employed under contract. 
      With the campus shut, they no longer have a means of livelihood. These workers help us sustain in the campus by providing services 
      for our daily needs- it is, now upon the <span style={{ fontWeight : "bold"}}>student comunity</span> to support them, when they most need us! 
    </p>
  </header>
  )
}

export default Header;