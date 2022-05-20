import React from "react";

function Footer() {
  return (
    <div>
      <footer id="contact-me" class="contact-me container-fluid">
            <h2>Contact Me</h2>
            <article>
                <ul class="d-flex">
                    <li>
                        <a class="footer-link" href='https://linkedin.com/in/emeraldarielgreen'><i class="material-icons">web</i>LinkedIn</a>
                    </li>
                    <li>
                        <a class="footer-link" href='mailto:emeraldthedeveloper@gmail.com'> <i class="material-icons">email</i>emeraldthedeveloper@gmail.com</a>
                    </li>
                    <li>
                        <a class="footer-link" href='https://github.com/EmeraldAGreen'><i class="material-icons">work</i>Github</a>
                    </li>
                </ul>
            </article>
        </footer>
    </div>
  );
}

export default Footer; 
