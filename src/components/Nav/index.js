import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import {Nav, Navbar} from 'react-bootstrap'

function NavTabs(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name);
  }, [currentPage]);

  return (    
      <Navbar>
         <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ml-auto">
          <ul className="flex-row">
          {pages.map((Page) => (
            <li
              className={`mx-5 ${
                currentPage.name === Page.name && 'navActive'
                }`}
              key={Page.name}
            >
              <span
                onClick={() => setCurrentPage(Page)}
              >
                {capitalizeFirstLetter(Page.name)}
              </span>
            </li>
          ))}
        </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}

export default NavTabs;


// import React from "react";
// import { Link } from "react-router-dom";
// import { Navbar, Nav, Container} from "react-bootstrap";

// // Here we are using object destructuring assignment to pluck off our variables from the props object
// // We assign them to their own variable names
// function NavTabs({ currentPage, handlePageChange }) {
//   return (
//     <Navbar>
//       <Container>
//         <Navbar.Brand as={Link} to="/">
//           EMERGE
//         </Navbar.Brand>
        // <Navbar.Toggle aria-controls="navbar" />
        // <Navbar.Collapse id="navbar">
        //   <Nav className="ml-auto">
        //     <Nav.Link as={Link} to="/about">
        //       ABOUT ME
        //     </Nav.Link>
        //     <Nav.Link as={Link} to="/portfolio"> 
        //     PORTFOLIO 
        //     </Nav.Link>
        //   </Nav>
        // </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavTabs;
