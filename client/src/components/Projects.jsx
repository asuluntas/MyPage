import React from 'react';

const Projects = () => (
  <div className="projects">

    <h1 className="project-title1">PROJECTS</h1>

    <div className="project">
    <img className="project-image" src="https://aysun.s3-us-west-1.amazonaws.com/Screen+Shot+2019-05-12+at+6.04.11+PM.png" alt="findtable" height="380" width="700"></img>
    <h2 className="project-title2">FindTable</h2>
    <p className="paragraph">A restaurant reservation app created using React.js, CSS, HTML, Node.js, and MySQL.</p>
    <a href="https://github.com/professor-6/service-reservation-aysun" className="button">GitHub</a>
    </div>

    <div className="project">
    <img className="project-image" src="https://aysun.s3-us-west-1.amazonaws.com/Screen+Shot+2019-07-22+at+4.35.21+PM.png" alt="vocabulary" height="370" width="700"></img>
    <h2 className="project-title2">Vocabulary</h2>
    <p className="paragraph">Language learning flashcard app. A CRUD app created using React.js, CSS, HTML, Node.js, and MySQL.</p>
    <a href="https://github.com/asuluntas/FlachCard" className="button">GitHub</a>
    </div>

    <div className="project">
    <img className="project-image" src="https://aysun.s3-us-west-1.amazonaws.com/Screen+Shot+2019-07-22+at+4.17.38+PM.png" alt="movieoke" height="390" width="700"></img>
    <h2 className="project-title2">MoviOke</h2>
    <p className="paragraph">A backend project for scaling a movie trailer app to handle high web traffic using PostgreSQL, AWS, Nginex, Loader.io, New Relic.</p>
    <a href="https://github.com/babbage-1/VideoPlayer_Module" className="button">GitHub</a>
    </div>

    <div className="project">
    <img className="project-image" src="https://aysun.s3-us-west-1.amazonaws.com/Screen+Shot+2019-07-23+at+8.04.09+PM.png" alt="twiddler" height="500" width="700"></img>
    <h2 className="project-title2">BitChart</h2>
    <p className="paragraph">An app that shows real time Bitcoin price charts created using React.js, Chart.js, HTML, CSS and Node.js.</p>
    </div>

    <div className="project">
    <img className="project-image" src="https://aysun.s3-us-west-1.amazonaws.com/Screen+Shot+2019-07-23+at+5.23.53+PM.png" alt="twiddler" height="390" width="700"></img>
    <h2 className="project-title2">.twiddler</h2>
    <p className="paragraph">A message app created using jQuery, HTML, and CSS.</p>
    </div>

  </div>
);


export default Projects;


