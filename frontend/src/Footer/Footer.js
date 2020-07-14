import React from 'react';
import "./Footer.css"

function Footer () {
  return(
    <footer className="footer">
      <hr />
      <div className = "Quoterow">
        "Our physical duty is to advance toward freedom: physical mental and sipritual- and help others to do so." - Swami Vivekanand
      </div>
      <div className = "row">
        <p className = "col-sm">
          &copy; {new Date().getFullYear()} BENEVOLENT FUND IITD | All rights reserved | Credits & Attributions
        </p>
      </div>
    </footer>
  )
}

export default Footer;