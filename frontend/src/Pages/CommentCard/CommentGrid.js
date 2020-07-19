import React, {Component} from 'react';
import {
  Container,
  Row,
  Col
} from 'react-bootstrap';
/*import {Card} from 'react-bootstrap';*/
import './CommentCard.css'
import CommentCard from './CommentCard';


class CommentPage extends Component{
  constructor() {
    super();
    this.state = {
       people: [
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
    }
  }
  render() {
    let commentcard = this.state.people.map(person => {
      return(
        <Col sm="4">
          <CommentCard person={person}/>
        </Col>
      )  
    })
    return(
      <Container fluid>
        <Row>
          {commentcard}
        </Row>
      </Container>
    )
  }
}

export default CommentPage;
