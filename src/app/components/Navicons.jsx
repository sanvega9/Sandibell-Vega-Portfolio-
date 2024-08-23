import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Navbaricons = () => {
  return (
    <div className="container mx-auto flex items-center justify-center">
      {/* Social Media Icons */}
      <div className="space-x-6">
        <a
          href="https://www.linkedin.com/in/sandibell-vega-953889180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" color="#0A66C2" />
        </a>
        <a
          href="https://youtube.com/@aibellvega?si=PGJYAalCzV8vBlic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" color="#FF0000"/>
        </a>
      </div>
    </div>
  );
};

export default Navbaricons;














