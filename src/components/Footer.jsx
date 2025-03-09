import React from 'react';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
      <div>
        <a href="https://github.com/yourusername">GitHub</a>
        <a href="https://linkedin.com/in/yourusername">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;