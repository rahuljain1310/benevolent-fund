import React, { useState } from 'react';
import {
  Card,
  Row,
  Col,
} from 'react-bootstrap';
import './CommentGrid.css';


function CommentCard({ person }) {
  return (
    <div className="CommentCard">
      <div className='shadow-hover'>
        <img variant='top' src={person?.imgPath} alt="My profile picture" className="image" /> <br />
        <span className='title'><b>{person?.name}</b><br /> </span>
        <span className="subtitle">{person?.year}</span>
        <p className="para">{person?.description}</p>
      </div>
    </div>
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
      name: "Aadarsh Kumar",
      year: "Final Year Undergraduate",
      imgPath: require('../../Assets/aadarsh.jpeg'),
      description: "I talked to a rickshaw puller, “They are so happy that words can't measure their emotions. Every amount received was not merely material cash but it brought in with it a lot of emotions.” It's time! when IITians shouldn't be seen as self-centered & career-oriented chaps, We are here to serve humanity. Amounts don’t matter, it's the heart behind that amount which beats and speaks volumes. Let us pledge to not let anyone be vulnerable at least on our campus and stand shoulder to shoulder with the administration to improve the efficacy.We must be grateful for bestowing us with this opportunity to serve society."
    },
    {
      name: "Vinay Kumar",
      year: "First Year Undergraduate",
      imgPath: require('../../Assets/vinay.png'),
      description: "I talked to Ramdas Ji, a rickshaw puller. He told me that he is currently living in Hafizabad, all types of his earnings are stopped due to pandemic. He does not face a shortage of grains but for ration, he seriously needs the money because it is really very difficult for him to manage. He also said that the Rs. 7000 that were sent to him earlier by the student community of IIT Delhi was kind of a lifesaver for him and his family. He was just overwhelmed after he got to know that the “IIT Community” had taken the initiative to help him and he was grateful to IIT for this kind act."
    },
    {
      name: "Bhanu Pratap Aiswal",
      year: "Sophomore Undergraduate",
      imgPath: require('../../Assets/bhanu.png'),
      description: "I interacted with Gopal Tiwari Ji, a helper on our campus. Currently, he is residing in Katwaria Sarai along with his family (3 children and wife). After talking with them, I found that they don’t even have sufficient food since he was unemployed since the beginning of the pandemic. He said that any monetary support will definitely work otherwise whatever destiny gives, he will accept. “To see good times one has to suffer, go through bad times”, he mentioned.He was basically very optimistic that soon things will be fine.In the end, he thanked all the people behind this initiative!"
    },
    {
      name: "Om Agrawal",
      year: "First Year Undergraduate",
      imgPath: require('../../Assets/om.jpeg'),
      description: "I talked to Kamal Ji, a Satpura Night Mess worker. His family consists of 5 members including him. He was given one installment of 12k one and a half months earlier, It was very much helpful.But now again, he was in need of money for the operation of his Mausiji, which needs to be done asap. He said that he can manage the situation for at max the next few days. After transferring the second installment, he thanked a lot to the whole team and appreciated the whole Benevolent fund initiative."
    },
    {
      name: "Raghav Modi",
      year: "Sophomore Undergraduate",
      imgPath: require('../../Assets/raghav.jpeg'),
      description: "I called Ashok Kumar Ji, a Nilgiri night mess worker. He is currently residing in his village with family. He was really upset as he could not go home when the lockdown was announced. He was unable to pay rents and has a 6-month-old baby, and was really worried about his health in Delhi.On receiving the money, he was able to pay his rents and make arrangements for moving back to the village. With the second installment, he was also able to buy seeds and sow rice in his small piece of land.He still needs money but will be able to manage even with a lesser amount. He even suggested us to help others who needed more before helping them."
    },
    {
      name: "Udita Wadhwa",
      year: "First Year Undergraduate",
      imgPath: require('../../Assets/udita.png'),
      description: "I talked to Anshul Ji, a Laundryman at Aravali hostel. I found out that he would soon be out of ration and other resources, thus in a serious need of financial assistance. When being informed about the benevolent fund campaign, he was very happy and grateful to the whole community. He appreciated that the “Student Community” is helping him whom he had served at some time.I also called Omkar Ji, a night mess worker at Aravali Night Mess. He is currently residing with his whole big family in the village and doing farming. He said that he would highly grateful if some financial help can be provided from IIT Community, especially “Students”."
    },
    {
      name: "Vishwajeet Agarwal",
      year: "Junior Undergraduate",
      imgPath: require('../../Assets/vishwajeet.png'),
      description: "Keshav Nepali Ji who works in Aravali Night mess was the one whom I had talked to. He went to his hometown in Nepal shortly after and is currently unemployed. He is facing a severe financial crisis so much that he didn’t even recharge his phone for long. He is in dire need of money and his expressions were lit when told about the money, he can receive through Benevolent fund. He has not received his funds as of yet, due to the inability of funds transfer to an international account from IIT-D administration. I am in contact with him to see if he can give his relatives bank account."
    }
  ]

  let [viewAll, setViewAll] = useState(false)
  let [buttonText, setButtonText] = useState('View All')
  let [viewCommentGrid, setCommentGrid] = useState(people.slice(0, 3))
  const toggleViewAll = () => {
    if (!viewAll) {
      setCommentGrid(people)
      setViewAll(true)
      setButtonText('Collapse')
    } else {
      setCommentGrid(people.slice(0, 3))
      setViewAll(false)
      setButtonText('View All')
    }
  }

  return (
    <section id='sc-testimonials'>
      <h2> What people say ...</h2>
      <hr />
      <Row>
        {viewCommentGrid.map((person, idx) => (
          <Col lg='4' sm='6' style={{ display: 'table-cell', marginBottom: '10px' }}>
            <CommentCard person={person} />
          </Col>
        ))
        }
      </Row>
      <div style={{ textAlign: 'center' }}>
        {<button onClick={toggleViewAll}>{buttonText}</button>}
      </div>
    </section>
  )
}

export default CommentGrid;
