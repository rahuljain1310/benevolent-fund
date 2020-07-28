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
      description: "I talked to a rickshaw puller, “They are so happy that words can't measure their emotions. Every amount received was not merely material cash but it brought in with it a lot of emotions.” It's time! when IITians shouldn't be seen as self-centered & career-oriented chaps, We are here to serve humanity. Amounts don’t matter, it's the heart behind that amount which beats and speaks volumes. Let us pledge to not let anyone be vulnerable at least on our campus and stand shoulder to shoulder with the administration to improve the efficacy.We must be grateful for bestowing us with this opportunity to serve society."
    },
    {
      name: "Vinay Kumar",
      year: "First Year, IITD",
      imgPath: require('../../Assets/vinay.png'),
      description: "I talked to Ramdas Ji, a rickshaw puller. He told me that he is currently living in Hafizabad, all types of his earnings are stopped due to pandemic. He does not face a shortage of grains but for ration, he seriously needs the money because it is really very difficult for him to manage. He also said that the Rs. 7000 that were sent to him earlier by the student community of IIT Delhi was kind of a lifesaver for him and his family. He was just overwhelmed after he got to know that the “IIT Community” had taken the initiative to help him and he was grateful to IIT for this kind act."
    },
    {
      name: "Bhanu Pratap Aiswal",
      year: "Second Year, IITD",
      imgPath: require('../../Assets/bhanu.png'),
      description: "I interacted with Gopal Tiwari Ji, a helper on our campus. Currently, he is residing in Katwaria Sarai along with his family (3 children and wife). After talking with them, I found that they don’t even have sufficient food since he was unemployed since the beginning of the pandemic. He said that any monetary support will definitely work otherwise whatever destiny gives, he will accept. “To see good times one has to suffer, go through bad times”, he mentioned.He was basically very optimistic that soon things will be fine.In the end, he thanked all the people behind this initiative!"
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
    </section>
  )
}

export default CommentGrid;
