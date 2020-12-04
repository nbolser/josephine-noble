import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaLinkedin } from '@react-icons/all-files/fa/FaLinkedin';
import { FaSalesforce } from '@react-icons/all-files/fa/FaSalesforce';
import { nanoid } from 'nanoid';

const Footer = () => (
  <footer className="footer navbar-static-bottom">
    <Container>
      <span className="back-to-top">
        <Link to="hero" smooth duration={1000}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </Link>
      </span>
      <div className="social-links">
        <a
          key={nanoid()}
          href="https://trailblazer.me/id/jnoble4"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="salesforce"
        >
          <div style={{ color: 'white' }}>
            <FaSalesforce size={60} />
          </div>
        </a>
        <a
          key={nanoid()}
          href="https://www.linkedin.com/in/jojonoble/"
          rel="noopener noreferrer"
          target="_blank"
          aria-label="linkedin"
        >
          <div style={{ color: '#ecf0f1' }}>
            <FaLinkedin size={60} />
          </div>
        </a>
      </div>
      <hr />
    </Container>
  </footer>
);

export default Footer;
