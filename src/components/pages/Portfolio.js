import React from "react";
import projectOne from "../../assets/images/home.png";
import projectTwo from "../../assets/images/screenshot1.png";
import projectThree from "../../assets/images/screenshot2.png";
import projectFour from "../../assets/images/screenshot3.png";
import projectFive from "../../assets/images/screenshot4.png";
import projectSix from "../../assets/images/screenshot5.png";
import projectSeven from "../../assets/images/screenshot6.png";

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div className="projects">
        <a
          className="projectLink"
          href="https://maifrigo-recipe-app.herokuapp.com/"
        >
          <img
            id="project2Img"
            src={projectSeven}
            className="m-2"
            style={{ width: "40%" }}
            alt="Icebreak-My-Date"
          />
          <p className="textOver">
            Maifrigo{" "}
            <a
              id="gitH2"
              class="btn-floating btn-fb px-2"
              href="https://github.com/Laura-Kam/Monfrigo"
            >
              <i class="fab fa-github fa-3x"> </i>
            </a>
          </p>
        </a>
      </div>
      <div className="projects">
        <a
          className="projectLink"
          href="https://immense-journey-92545.herokuapp.com/"
        >
          <img
            id="project2Img"
            src={projectTwo}
            className="m-2"
            style={{ width: "40%" }}
            alt="Icebreak-My-Date"
          />
          <p className="textOver">
            Icebreak My Date{" "}
            <a
              id="gitH2"
              class="btn-floating btn-fb px-2"
              href="https://github.com/Inna1201/Project-2-Icebreak-My-Date"
            >
              <i class="fab fa-github fa-3x"> </i>
            </a>
          </p>
        </a>
      </div>
      <div className="projects">
        <a
          className="projectLink"
          href="https://inna1201.github.io/Project-1-Destination-Guide/"
        >
          <img
            id="projectImg"
            src={projectOne}
            className="m-2"
            style={{ width: "40%" }}
            alt="destination-guide"
          />
          <p className="textOver">
            destination guide{" "}
            <a
              id="gitH"
              class="btn-floating btn-fb px-2"
              href="https://github.com/Inna1201/Project-1-Destination-Guide"
            >
              <i class="fab fa-github fa-3x"> </i>
            </a>
          </p>
        </a>
      </div>
      <div className="projects">
        <a
          className="projectLink"
          href="https://calm-waters-98877.herokuapp.com/"
        >
          <img
            id="project3Img"
            src={projectThree}
            className="m-2"
            style={{ width: "40%" }}
            alt="BrightMinds-Tech-Blog"
          />
          <p className="textOver">
            BrightMinds TechBlog{" "}
            <a
              id="gitH3"
              class="btn-floating btn-fb px-2"
              href="https://github.com/Inna1201/BrightMinds-Tech-Blog"
            >
              <i class="fab fa-github fa-3x"> </i>
            </a>
          </p>
        </a>
      </div>
      <div className="projects">
        <a
          className="projectLink"
          href="https://warm-stream-19359.herokuapp.com/"
        >
          <img
            id="project4Img"
            src={projectFour}
            className="m-2"
            style={{ width: "40%" }}
            alt="PlanningGuru-note-taker-app"
          />
          <p className="textOver">
          PlanningGuru Notetaker{" "}
            <a
              id="gitH4"
              class="btn-floating btn-fb px-2"
              href="https://github.com/Inna1201/PlanningGuru-note-taker-app-"
            >
              <i class="fab fa-github fa-3x"> </i>
            </a>
          </p>
        </a>
      </div>
      <div className="projects">
        <a
          className="projectLink"
          href="https://inna1201.github.io/Weather-Dashboard-Inna-s-Challenge-6/"
        >
          <img
            id="project5Img"
            src={projectFive}
            className="m-2"
            style={{ width: "40%" }}
            alt="Weather-Dashboard"
          />
          <p className="textOver">
          Weather Dashboard{" "}
            <a
              id="gitH5"
              class="btn-floating btn-fb px-2"
              href="https://github.com/Inna1201/Weather-Dashboard-Inna-s-Challenge-6"
            >
              <i class="fab fa-github fa-3x"> </i>
            </a>
          </p>
        </a>
      </div>
      <div className="projects">
        <a
          className="projectLink"
          href="https://inna1201.github.io/Work-Day-Scheduler-Inna-s-Challenge-5/"
        >
          <img
            id="project6Img"
            src={projectSix}
            className="m-2"
            style={{ width: "40%" }}
            alt="Work-Day-Scheduler"
          />
          <p className="textOver">
          Work Day Scheduler{" "}
            <a
              id="gitH6"
              class="btn-floating btn-fb px-2"
              href="https://github.com/Inna1201/Work-Day-Scheduler-Inna-s-Challenge-5"
            >
              <i class="fab fa-github fa-3x"> </i>
            </a>
          </p>
        </a>
      </div>
    </div>
  );
}
