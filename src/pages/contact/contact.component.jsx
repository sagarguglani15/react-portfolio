import React from "react";
import Button from "react-bootstrap/Button";

import "./contact.style.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b">CONTACT ME</h1>
      <hr/>
      <div className="contact">
        <div className="contact-container">
          <div className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="mailto:sagarguglani.g.30@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title="sagarguglani.g.30@gmail.com">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.linkedin.com/in/sagar-guglani/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Connect with me on LinkenIn">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/sagarguglani15" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.youtube.com/channel/UCJmY9APRpmq8PGMns7YtLgw" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="Lets code together!">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.hackerrank.com/sagarguglani_g_1" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-success">
                  <i className="fab fa-hackerrank"></i> Hackerrank
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/sagarguglani/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary" title="Say hello on FB">
                  <i className="fab  fa-facebook"></i> FaceBook
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://leetcode.com/user5341u/" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info">
                  <i className="fas fa-lightbulb"></i> LeetCode
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;