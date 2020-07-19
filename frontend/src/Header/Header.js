import React, {useEffect} from 'react';
import {
  Row,
  Col,
  Navbar
} from 'react-bootstrap';
import iitdLogo from '../Assets/iitdLogo.jpg';
import {SmallContributeButton} from '../Pages/ContributeButton/ContributeButton';
import './header.css';

function Header () {
<<<<<<< HEAD
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
=======

  useEffect (() => {
    var shiftWindow = function() { window.scrollBy(0, -120) };
    if (window.location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);
    return () => window.removeEventListener("hashchange", shiftWindow)
  }, [])

  return (
  <header>
    <Row>
      <Col md={6}>
        <img src={iitdLogo} alt="IIT-D Logo" id="header-image"/>
        {/* <b>  */}
          <div id="head">IIT DELHI BENEVOLENT FUND</div>
        {/* </b> */}
        {/* <i> */}
          <div id="subhead">
            Helping others is the way we help ourselves!
          </div>
        {/* </i> */}
      </Col>
      <Col md={6}>
        <nav className="color">
          <a className="Links" href = "#sc-bulletin">Contributors</a>
          <a className="Links" href = "#sc-beneficiary" >Beneficiaries</a>
          <a className="Links" href = "#sc-comments">Comments</a>
          <SmallContributeButton/>
        </nav>
      </Col>
    </Row>
>>>>>>> 0526f900e0af1ef3f1b1f2eeb5798ad576e8ee9d
  </header>
  )
}

export default Header;
