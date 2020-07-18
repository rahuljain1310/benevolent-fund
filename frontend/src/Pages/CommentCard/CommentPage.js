import React from 'react';
import {Card} from 'react-bootstrap';
import './CommentCard.css'
import CommentCard from './Pages/CommentCard/CommentCard';


    

function CommentPage(){

    const comments = [
        ["Rahul Jain","3 Y","Help important"],
        ["Ashish", "2y","Help important"],
        ["Om","1 Y","Help important"],
        ["Vinay","1y","Himadri shop"]],

    const CommentCards = comments.map((person,idx) => {
        return(
            name = person[0],
            about = person[1],
            comment = person[2],
        )
    }
    return(

    )
}