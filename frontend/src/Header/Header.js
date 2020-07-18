import React, {useEffect} from 'react';
import {
  Row,
  Col
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
      <Col>
        <img src={iitdLogo} alt="IIT-D Logo" id="header-image"/>
        <b> 
          <div id="head">IIT DELHI BENEVOLENT FUND</div>
        </b>
        <i>
          <div id="subhead">
            Helping others is the way we help ourselves!
          </div>
        </i>
      </Col>
      <Col>
        <nav className="color">
          <a className="Links" href = ""> Home  </a>
          <a className="Links" href = ""> About </a>
          <a className="Links" href = "#sc-bene" >Beneficiaries</a>
          <a className="Links" href = "">Comments</a>
          <SmallContributeButton/>
        </nav>
      </Col>
    </Row>
  </header>
  )
}

export default Header;
