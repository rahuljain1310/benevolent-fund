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
  </header>
  )
}

export default Header;
