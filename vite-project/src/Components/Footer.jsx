import React from 'react'
import './style.css'

const Footer = () => {
  return (
    <>
      
      <footer class="footer-distributed">

        <div class="footer-left">
      
          <h3>Democracy 2.0</h3>
      
          <p class="footer-links">
            <a href="#" class="link-1">Home</a>
      
            <a href="#">Know Your Leader</a>
      
            <a href="#">Voice Your Protest</a>
      
          </p>
        </div>
      
        <div class="footer-center">
      
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
          </div>
      
          <div>
            <i class="fa fa-phone"></i>
            <p>+1.555.555.5555</p>
          </div>
      
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:support@company.com">support@gov.in</a></p>
          </div>
      
        </div>
      
        <div class="footer-right">
      
          <p style="color: white;" class="footer-company-about">
            <span>About</span>
            Democracy 2.0 is an innovative app designed to revolutionize the way citizens interact with their leaders and social movements.
          </p>
        </div>
      
      </footer>
    </>
  )
}

export default Footer
