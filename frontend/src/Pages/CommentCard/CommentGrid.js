import React from 'react';
import {
  Card,
  Row,
  Col,
} from 'react-bootstrap';
import './CommentGrid.css';


function CommentCard({ person }) {
  return (
    <Card className="CommentCard">
      <img variant='top' src={person?.imgPath} alt="My profile picture" className="image" />
      <br />
      <Card.Title className="title">
        <b>{person?.name}</b>
        <br />
        <span className="subtitle">{person?.year}</span>
      </Card.Title>
      <Card.Text className="para">{person?.description}</Card.Text>
    </Card>
  )
}

function CommentGrid() {
  const people = [
    {
      name: "Divyanshu Saxena",
      year: "Final Year Undergraduate",
      imgPath: require('../../Assets/divyanshu.jpeg'),
      description: "While conversing with a friend, I realized that we have “normalized” our lives so easily in the past four months that we fail to understand, for many of these workers, nothing has been “normal”. The workers whom I had personally interacted with was very thankful to the campus fraternity, for their support and contribution as he was able to sustain the amount for tuition fees for his kids, whose schools were still ongoing in online format but the most striking feature after all these conversations was that some of these workers were also considerate enough to “refuse the help” as they believed there would be others who would need it more than them!"
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
  return (
    <section id='sc-testimonials'>
      <h2> What people say ...</h2>
      <hr/>
      <Row>
        { people.map((person,idx)=>(
          <Col lg='3' sm='6' style={{display: 'table-cell'}}>
            <CommentCard person={person}/>
          </Col>
          ))
        }
      </Row>
      <br/>
      <a href="#" target="blank"> View All</a>
      <br/> <br/>
      <a href="#" target="blank"> Share Your Story </a>
    </section>
  )
}

export default CommentGrid;
