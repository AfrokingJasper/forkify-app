import React from "react";
import "./about.css";
import ME from "../../assest/profile-image.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About(props) {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="fortune" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working Experience</small>
            </article>
            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Feedbacks</h5>
              <small>20+ Feedbacks</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>13+ Completed Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            eaque recusandae voluptatibus maiores, magni voluptates quas hic nam
            officia cumque. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Corporis accusamus ex natus mollitia nisi, eius ea praesentium
            ad sit? Temporibus!
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
