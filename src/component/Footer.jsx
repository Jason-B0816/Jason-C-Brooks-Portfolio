import React from 'react';
function Footer () {
    return (
        <footer className = "footer">
        <h2>Connect with Me</h2>
        <div className = "social-links">
         <a href="https://www.x.com/Jason_B0816" target="_blank" rel="noopener noreferrer">
         <img src="/x-icon.png" alt="X" />
       </a>
       <a href="https://www.linkedin.com/in/jason-brooks-715036358" target="_blank" rel="noopener noreferrer">
         <img src="/linkedIn-icon.png" alt="LinkedIn" />
       </a>
       <a href="https://github.com/Jason-B0816" target="_blank" rel="noopener noreferrer">
         <img src="/github-icon.png" alt="GitHub" />
     </a>
     </div>
     <p>&copy; 2025 Jason C Brooks. All rights reserved.</p>
      </footer>
    )
}

export default Footer;