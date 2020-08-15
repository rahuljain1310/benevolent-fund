import React, { Component } from 'react';
import './ContributeButton.css';

function SmallContributeButton () {
  return(
    <span className='SmallContributeButton'>
      <a href="https://pages.razorpay.com/pl_FNOaLa79UH4Lo7/view" target="blank">Contribute</a>
    </span>
  )
}

class BigContributeButton extends Component {
  componentDidMount () {
    const script = document.createElement("script");
    script.src = "https://cdn.razorpay.com/static/embed_btn/bundle.js";
    script.defer = !0;
    script.id = 'razorpay-embed-btn-js';
    document.body.appendChild(script);
  }

  render () {
    return(
      // <div class='BigContributeButton'>
      //   <span>
      //     &hearts; Contribute
      //   </span>
      // </div>
      <div className="RazorpayButton">
        <div
          class="razorpay-embed-btn"
          data-url="https://pages.razorpay.com/pl_FNOaLa79UH4Lo7/view"
          data-text="Contribute Now"
          data-color="#e03646"
          data-size="medium"
        />
      </div>
    )
  }
}

export {
  BigContributeButton,
  SmallContributeButton
};
