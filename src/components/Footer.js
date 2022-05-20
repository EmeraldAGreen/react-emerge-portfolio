import React from "react";
import 'material-icons/iconfont/material-icons.css';


function Footer() {
  return (
    <div>
      <footer id="contact-me" className="contact-me container-fluid">
            <h2>Contact Me</h2>
                <ul className="d-flex flex-row justify-content-around" style={{listStyleType:'none'}}>
{/*                     
                    <li>
                        <a className="footer-link" href='https://linkedin.com/in/emeraldarielgreen'><i className="material-icons">web</i>LinkedIn</a>
                    </li>
                    <li>
                        <a className="footer-link" href='mailto:emeraldthedeveloper@gmail.com'> <i className="material-icons">email</i>emeraldthedeveloper@gmail.com</a>
                    </li>
                    <li>
                        <a className="footer-link" href='https://github.com/EmeraldAGreen'><i className="material-icons">work</i>Github</a>
                    </li> */}
        <li>
        <a href="https://linkedin.com/in/emeraldarielgreen">
        <i className="material-icons">web</i>
          LinkedIn
        </a>
      </li>
      <li>
        <a href="mailto:emeraldthedeveloper@gmail.com">
        <i className="material-icons">email</i>
        emeraldthedeveloper@gmail.com
        </a>
      </li>
      <li>
        <a href='https://github.com/EmeraldAGreen'>
        <i className="material-icons">work</i>
        Github
        </a>
      </li>
     </ul>
        </footer>
    </div>
  );
}

export default Footer; 
