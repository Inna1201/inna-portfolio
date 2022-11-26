import React from "react";
import avatar from "../../assets/images/avatar.JPG";

export default function About() {
  return (
    <div id="about">
      <h2>About me</h2>
      <img id="avatar"
        className="my-pic"
        src={avatar}
        // src={process.env.PUBLIC_URL + "/img/avatar.jpg"}
        alt="Inna's avatart"
      />
      <div id="aboutDesc">
        <p>
          Hello and welcome to my Portfolio app. I'm Inna Mamedova, a Full Stack
          Devepoler (to be). Currently a student of Birmingham University
          Codding Bootcamp.
        </p>
        <p>
          I am reliable, driven with strong time management and prioritisation
          skills. Ready to cooperate with colleagues in a team and work on my
          own initiative. Responsible, honest, hardworking, flexible in the
          workplace and able to multitask. Dedicated to continuous improvements,
          results-orientated and proactive in self-development and willingness
          to learn new skills.
        </p>
      </div>
    </div>
  );
}
