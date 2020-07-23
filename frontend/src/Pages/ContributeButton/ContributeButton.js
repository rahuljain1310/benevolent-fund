import React from 'react';
import './ContributeButton.css'

function SmallContributeButton () {
  return(
    <span className='SmallContributeButton'>
      <a href="#" target="blank">Contribute</a>
    </span>
  )
}

function BigContributeButton () {
  return(
    <div class='BigContributeButton'>
      <a href="#" target="blank">
        &hearts; Donate HERE
      </a>
    </div>
  )
}

export {
  BigContributeButton,
  SmallContributeButton
};
