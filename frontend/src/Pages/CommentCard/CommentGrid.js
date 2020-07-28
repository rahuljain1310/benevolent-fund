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
      year: "Fourth Year, IITD",
      imgPath: require('../../Assets/divyanshu.jpeg'),
      description: "While conversing with a friend, I realized that we have “normalized” our lives so easily in the past four months that we fail to understand, for many of these workers, nothing has been “normal”. The workers whom I had personally interacted with was very thankful to the campus fraternity, for their support and contribution as he was able to sustain the amount for tuition fees for his kids, whose schools were still ongoing in online format but the most striking feature after all these conversations was that some of these workers were also considerate enough to “refuse the help” as they believed there would be others who would need it more than them!"
    },
    {
      name: "Aadarsh Kumar",
      year: "Fourth Year, IITD",
      imgPath: require('../../Assets/aadarsh.jpeg'),
      description: "I talked to a rickshaw puller, “They are so happy that words can't measure their emotions. Every amount received was not merely material cash but it brought in with it a lot of emotion.” It's time! when IITians shouldn't be seen as mere self-centered and career-oriented chaps, We are here to serve humanity. Amounts don’t matter, it's the heart behind that amount which beats and speaks volumes. Let us pledge to not let anyone be vulnerable at least on our own campus and stand shoulder to shoulder with the administration to improve the efficacy.We must be thankful to the administration for bestowing us with this opportunity to serve society."
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
          <Col lg='6' sm='5'>
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
      <br/>
      <a href="#" target="blank"> View All</a>
      <br/> <br/>
      <a href="#" target="blank"> Share Your Story </a>
    </section>
  )
}

export default CommentGrid;
