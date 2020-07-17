import React from 'react'
import Button from 'react-bootstrap/Button';
import ContributeButton from '../ContributeButton/ContributeButton.js'

function ContributionCard () {
  return(
    <div class='ContributionCard'>
      AmountCollected
      ContributersCount
      <div class='full-row'>

        <div class='cpn-left'>
          <div class='cpn-tag'>AmountCollected </div>
          <div class='cpn-value'>4512154</div>
        </div>

        <div class='cpn-right'>
          <div class='cpn-tag'> ContributersCount</div>
          <div class='cpn-value'>14</div>
        </div>

      </div>

      <div class='Above-contribute-Button'>
        Contribute by clicking the button below
      </div>

      <div class='btn'>
       <ContributeButton/>
      </div>

    </div>
  )
}

export default ContributionCard;
