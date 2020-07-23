import React, { Component } from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
/*import {Card} from 'react-bootstrap';*/
// import './CommentCard.css'
import CommentCard from './CommentCard';


function CommentGrid() {
  const people = [
    {
      name: "Rahul Jain",
      year: "Third Year, IITD",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Om Agrawal",
      year: "First Year, IITD",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Nishant Kumar",
      year: "First Year, IITD",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]
  return (
    <section id='sc-comment-grid'>
      <Container fluid>
        <Row>
          {people.map(person => (
            <Col sm="4">
              <CommentCard person={person} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default CommentGrid;
