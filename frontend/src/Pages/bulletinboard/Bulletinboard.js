import React from 'react';
import { useState } from 'react';
import Buttton from 'react-bootstrap/Button';
import './BulletinBoard.css';
function BulletinBoard(){
    
    const [beneficiary, setBeneficiary] = useState([
        ["Mukesh","Karakoram shop"],
        ["Aashish", "Vindy Washerman"],
        ["Om","Shivalik gardner"],
        ["Vinay","Himadri shop"],
        ["Vasant","Kailash juice shop"]]);
    const listOfBeneficiary = beneficiary.map( (person) => <li>{person[0]} : {person[1]} <hr style={{color:"black"}} /> </li>);
    // const [workPlace, setWorkPlace]=  useState(["Karakoram shop", "Vindy Washerman", "Shivalik gardner", "Himadri shop", "Kailash juice shop"]);
    // const listOfWorkPlace = workPlace.map((placeName) => )

    return(
        <div className="listClass">
            {/* style={{border: groove}} */}
        {/* <h1>Present Benficiarie are {beneficiary}</h1> */}

        <h3>Beneficiaries </h3>
        <ul>
            {/* <h3>Beneficiary</h3> */}
            <hr  />
            {/* <hr style={{color:"blue"}} /> */}
            {listOfBeneficiary}
            
        </ul>
        <Buttton className="btn-primary">Load more</Buttton>
        </div>


    )
}

export default BulletinBoard;