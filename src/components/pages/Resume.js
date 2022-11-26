import React from "react";
import myResume from "../../assets/files/InnaMamedova.pdf";

export default function Resume() {
  return (
    <div>
      <div>
        <h2>Resume</h2>
      </div>
      
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="columnTitle">
              Font-End Tech <span id="arrow">&#8628;</span>
            </p>
            <ul className="tech">
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div className="col">
            <p className="columnTitle">
              Back-End Tech <span id="arrow">&#8628;</span>
            </p>
            <ul className="tech">
              <li>Node.Js</li>
              <li>APIs</li>
              <li>Express.js</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="col">
            <p className="columnTitle">
              Concepts <span id="arrow">&#8628;</span>
            </p>
            <ul className="tech">
              <li>Object-Oriented Programming (OOP)</li>
              <li>Object-Relational Mapping(ORM)</li>
              <li>Model-View-Controller (MVC)</li>
              <li>Progressive Web Applications (PWA)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <h4 id="resume">A copy of my resume:</h4>
          </div>
          <div className="col-9">
            <a class="btn-floating btn-li px-2" href={myResume}>
              <i id="dwIcon" class="fas fa-download fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
