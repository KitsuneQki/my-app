import React from "react";
import { VscGithub } from "react-icons/vsc";
import { BsLinkedin } from "react-icons/bs";

function Contact() {
  return (
    <div>
      <a
        href="https://github.com/KitsuneQki"
        target="_blank"
        rel="noreferrer"
        className="icons-contact"
      >
        <VscGithub className="contact-icon" />
        @KitsuneQki
      </a>
      <a
        href="https://www.linkedin.com/in/kevinzerpa/"
        target="_blank"
        rel="noreferrer"
        className="icons-contact"
      >
        <BsLinkedin className="contact-icon" />
        Kevin Zerpa
      </a>
    </div>
  );
}

export default Contact;
