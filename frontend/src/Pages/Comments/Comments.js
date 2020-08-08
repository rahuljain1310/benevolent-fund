import React from "react"
import Disqus from "disqus-react"

function DisqusComments () {
  const disqusShortname = "benevolent-fund"
  const disqusConfig = {
    url: "http://benevolent.iitd.ac.in",
    identifier: "1",
    title: "Students for IITD Community"
  }
  return (
    <section id='sc-comments'>
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </section>
  )
}

export default DisqusComments;