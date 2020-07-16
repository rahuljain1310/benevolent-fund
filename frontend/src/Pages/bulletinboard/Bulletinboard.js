import React from 'react';
import { useState } from 'react';
import Buttton from 'react-bootstrap/Button';
import CardTemplate from './Card';
import './BulletinBoard.css';
import iitdDirector from '../../Assets/iitdDirector.jpeg';
import Paragsir from '../../Assets/Paragsir.jpg';
import CountUp from 'react-countup';
function BulletinBoard(){
    
    const [beneficiary, setBeneficiary] = useState([
        ["Mukesh","Karakoram shop"],
        ["Aashish", "Vindy Washerman"],
        ["Om","Shivalik gardner"],
        ["Vinay","Himadri shop"],
        ["Vasant","Kailash juice shop"]]);
    const listOfBeneficiary = beneficiary.map( (person) => <li>{person[0]} : {person[1]} <hr style={{color:"black"}} /> </li>);

    const [contributorsCount, setContributorCount]= useState(554);

    const [totalAmount, setTotalAmount] = useState(587554);
  
    return(
        <div>
            <div className="listClass">
                <h3 style={{textAlign:'center'}}>Beneficiaries </h3>
                <hr />
                <ul>
                    {listOfBeneficiary}
                </ul>
                <Buttton className="btn-primary">Load more</Buttton>
            </div>
            <div className="CardClass">
                <CardTemplate image={iitdDirector} title="IITD Director" text="Some quick example text to build on the card title and make up the bulk of
            the card's content." />
                <h4>Total Contributors</h4>
                <CountUp  end={contributorsCount} className="counterClass" />

            </div>
            <div className="CardClass">
                <CardTemplate image={Paragsir} title="IITD Professor" text="Some quick example text to build on the card title and make up the bulk of
            the card's content."/>
                <h4>Total Contribution</h4>
                <CountUp end={totalAmount} className="counterClass" />
            </div>

        </div>


    )
}

export default BulletinBoard;
