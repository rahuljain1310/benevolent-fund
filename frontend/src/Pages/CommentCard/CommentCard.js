import React, {Component} from 'react';
import{Card} from 'react-bootstrap';
import './CommentCard.css'

class CommentCard extends Component{
  constructor(props) {
    super(props);
  }
render () {
  return(
      <Card className="CommentCard">
          <Card.Img variant="top" src="" alt="My Profile Picture" className="image" />
            <Card.Title>{this.props.person.name}</Card.Title>
            <Card.Subtitle>{this.props.person.year}</Card.Subtitle>
            <Card.Text>{this.props.person.description}</Card.Text>
        </Card>
      )
    }
}

    export default CommentCard;
