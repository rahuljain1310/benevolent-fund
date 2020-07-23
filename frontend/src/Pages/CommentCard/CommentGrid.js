import React from 'react';
import {
  Card,
  Row,
  Col,
} from 'react-bootstrap';
import './CommentGrid.css';
/*import {Card} from 'react-bootstrap';*/
/*import './CommentCard.css'*/
/*import CommentCard from './CommentCard';*/

function CommentCard({person}) {
  return(
    <Card className="CommentCard">
      <Card.Img variant='top' src={person?.imgPath} alt="My profile picture" className="image_c"></Card.Img>
      <br/>
      <Card.Title className="title_c">
        <b>{person?.name}</b>
        <br/>
        <span className="subtitle_c">{person?.year}</span>
      </Card.Title>
      <Card.Text className="para_c">{person?.description}</Card.Text>
    </Card>
  )
}

function ViewAllButton () {
    return(
      <span>
        <a className="ViewAll" href="#" target="blank">View All</a>
      </span>
    )
  }

  function ShareYourStoryButton () {
    return(
      <div >
        <a class='ShareYourStory' href="#" target="blank">
          Share YOUR Story
        </a>
      </div>
    )
  }

function CommentGrid() {
  const people =[
    {
      name: "Rahul Jain",
      year: "Third Year, IITD",
      imgPath: require('../../Assets/rahul.jpeg'),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Om Agrawal",
      year: "First Year, IITD",
      imgPath: require('../../Assets/rahul.jpeg'),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
      name: "Nishant Kumar",
      year: "First Year, IITD",
      imgPath: require('../../Assets/rahul.jpeg'),
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    }
  ]
  return(
    <div className="CommentGrid">
      <div className="heading_c"> WHAT PEOPLE SAY...</div>
      <br/>
      <Row>
        { people.map((person,idx)=>(
          <Col lg='4' sm='3'>
            <CommentCard person={person}/>
          </Col>
          ))
        }
      </Row>
      <br/><br/>
      <Row>
        <Col>
          <ViewAllButton/> 
        </Col>
        <Col>
          <ShareYourStoryButton/>
        </Col>
      </Row>
    </div>
  )
}



export default CommentGrid;
