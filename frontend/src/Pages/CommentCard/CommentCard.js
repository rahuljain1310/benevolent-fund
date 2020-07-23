import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
// import './CommentCard.css'

function CommentCard ({person}) {
  return(
    <Card className="CommentCard">
        <Card.Img variant="top" src={person?.imgS} alt="My Profile Picture" className="image" />
          <Card.Title className="title">{person?.name}</Card.Title>
          <Card.Subtitle className="subtitle">{person?.year}</Card.Subtitle>
          <Card.Text className="para">{person?.description}</Card.Text>
      </Card>
    )
}

function ViewAllButton () {
  return(
    <span className='ViewAll'>
        <a href="#" target="blank">View All</a>
      </span>
    )
  }
  
  
export default CommentCard;
