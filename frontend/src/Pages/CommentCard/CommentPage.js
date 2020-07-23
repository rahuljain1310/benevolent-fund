import React, {Component} from 'react';
import {
  Container,
  Row,
  Col,
  Card
} from 'react-bootstrap';
import './CommentPage.css';

function CommentCard ({person}) {
  return (
    <Card className='CommentCard'>
      <Card.Img variant="top" src={person?.imgPath} alt="My Profile Picture" className="image" />
      <Card.Title>{person?.name}</Card.Title>
      <Card.Text>{person?.year}</Card.Text>
      <Card.Text>{person?.description}</Card.Text>
    </Card>
  )
}

/*function  ShareYourStoryButton () {
  return(
    <div class='ShareYourStoryButton'>
      <a href="#" target="blank">
        &hearts; Share YOUR Experience here
      </a>
    </div>
  )
}*/


function CommentPage() {
  const people = [
    {
      name: "Rahul Jain",
      year: "Third Year, IITD",
      imgPath: require('../../Assets/opindia.png'),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Om Agrawal",
      year: "First Year, IITD",
      imgPath: require('../../Assets/opindia.png'),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Nishant Kumar",
      year: "First Year, IITD",
      imgPath: require('../../Assets/opindia.png'),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]
}

function ShareYourStoryButton () {
    return(
      <div class='ShareYourStoryButton'>
        <a href="#" target="blank">
          &hearts; Share YOUR Experience here
        </a>
      </div>
    )
  }

  return (
    <section id='sc-testimonials'>
      <h3>What People Say... </h3>
      <Row>
        {people.map((person, idx) => (
          <Col lg="4" sm='3'>
            <CommentCard person={person} />
          </Col>
        ))}
      </Row>
      <Row>
        <Col>
          <ShareYourStoryButton/>
        </Col>
      </Row>
    </section>
  )
}

function Webpage() {
  return (
    <div className = "page-container">
      <div className = "content-wrap">
        <Header/>
        <CommentPage/>
        <Footer/>
      </div>
    </div>
  )
}

export default Webpage;
