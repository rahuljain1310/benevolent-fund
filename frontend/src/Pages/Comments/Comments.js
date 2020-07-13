import React from "react"
import Disqus from "disqus-react"
import './Comments.css'

function DisqusComments () {
  const disqusShortname = "benevolent-fund"
  const disqusConfig = {
    url: "http://localhost:3000",
    identifier: "1",
    title: "Students for IITD Community"
  }
  return (
    <div className='comment-section'>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default DisqusComments;