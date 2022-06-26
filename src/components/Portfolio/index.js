import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'book-search-engine',
      description: 'a RESTFUL API refactored to a full-fledged GraphQL API with a client and server',
      link: "https://polar-savannah-39442.herokuapp.com/",
      repo: "https://github.com/EmeraldAGreen/book-search"
    },
    {
      name: 'text-editor',
      description: 'a progressive web app that is fast, responsive, and installable from any browser',
      link: "https://lit-journey-57734.herokuapp.com/",
      repo: "https://github.com/EmeraldAGreen/PWA-text-editor"
    },
    {
      name: 'social-network',
      description: 'a NOSQL API for a social network app, tested in Insomnia',
      link: "https://drive.google.com/file/d/1XohuqQTMUxmHOSTu4KuG2YeRWdQA6GdI/view",
      repo: "https://github.com/EmeraldAGreen/noSQL-social-network"
    },
    {
      name: 'notes-app',
      description: 'create and delete notes via a unique ID',
      link: "https://note-taker-app001.herokuapp.com/",
      repo: "https://github.com/EmeraldAGreen/notes-app-express.js"
    },
    {
      name: 'good-neighbor',
      description: 'a full-stack MERN app that allows the user to view and complete tasks in their zip code',
      link: "https://be-a-good-neighbor.herokuapp.com/",
      repo: "https://github.com/emmareimer/goodneighbor"
    },
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
