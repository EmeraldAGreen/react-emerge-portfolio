import React from "react";

function Footer() {
  return (
    <div>
      <footer id="contact-me" className="contact-me container-fluid">
            <h2>Contact Me</h2>
            <article>
                <ul className="d-flex">
                    <li>
                        <a className="footer-link" href='https://linkedin.com/in/emeraldarielgreen'><i className="material-icons">web</i>LinkedIn</a>
                    </li>
                    <li>
                        <a className="footer-link" href='mailto:emeraldthedeveloper@gmail.com'> <i className="material-icons">email</i>emeraldthedeveloper@gmail.com</a>
                    </li>
                    <li>
                        <a className="footer-link" href='https://github.com/EmeraldAGreen'><i className="material-icons">work</i>Github</a>
                    </li>
                </ul>
            </article>
        </footer>
    </div>
  );
}

export default Footer; 
