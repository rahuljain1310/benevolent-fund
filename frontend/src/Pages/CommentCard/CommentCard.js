import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import './CommentCard.css'

class CommentCard extends Component{
  constructor(props) {
    super(props);
  }
render () {
    console.log(this.props)
    return(
      <Card className="CommentCard">
          <Card.Img variant="top" src="" alt="My Profile Picture" className="image" />
            <Card.Title className="title">{this.props.person?.name}</Card.Title>
            <Card.Subtitle className="subtitle">{this.props.person?.year}</Card.Subtitle>
            <Card.Text className="para">{this.props.person?.description}</Card.Text>
        </Card>
      )
    }
}

export default CommentCard;

function ViewAllButton () {
    return(
      <span className='ViewAll'>
        <a href="#" target="blank">View All</a>
      </span>
    )
  }

