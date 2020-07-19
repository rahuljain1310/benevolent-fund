import React, { Component } from 'react';
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
      <Card.Img variant="top" src="" alt="My Profile Picture" className="image" />
      <Card.Title>{person?.name}</Card.Title>
      <Card.Text>{person?.year}</Card.Text>
      <Card.Text>{person?.description}</Card.Text>
    </Card>
  )
}

function  ShareYourStoryButton () {
  return(
    <div class='ShareYourStoryButton'>
      <a href="#" target="blank">
        &hearts; Share YOUR Experience here
      </a>
    </div>
  )
}


function CommentPage() {
  const people = [
    {
      name: "Rahul Jain",
      year: "Third Year, IITD",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Om Agrawal",
      year: "First Year, IITD",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Nishant Kumar",
      year: "First Year, IITD",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]

  return (
    <section id='sc-testimonials'>
      <h3>What People Say </h3>
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

export default CommentPage;