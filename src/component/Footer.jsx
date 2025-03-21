import React from 'react';
function Footer () {
    return (
        <footer className = "footer">
        <h2>Connect with Me</h2>
        <div className = "social-links">
         <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
         <img src="/images/twitter-icon.png" alt="Twitter" />
       </a>
       <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
         <img src="/images/linkedin-icon.png" alt="LinkedIn" />
       </a>
       <a href="https://github.com/Jason-B0816" target="_blank" rel="noopener noreferrer">
         <img src="/images/github-icon.png" alt="GitHub" />
     </a>
     </div>
     <p>&copy; 2025 Jason C Brooks. All rights reserved.</p>
      </footer>
    )
}

export default Footer;