import React, { Component } from 'react';
import "./Resume.css"
import profile from '../../images/profile.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CovidTracker from '../CovidTracker/CovidTracker';

class Resume extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
                <span className="d-block d-lg-none">Trupti Hosmani</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={profile} alt="..." /></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Projects</a></li>
                </ul>
            </div>
        </nav>
        {/* Page Content */}
        <div className="container-fluid p-0">
            {/* About */}
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Trupti
                        <span className="text-primary">Hosmani</span>
                    </h1>
                    <div className="subheading mb-5">
                        Magarpatta City ?? Pune 411028 ?? +91 8600 186 773 ??
                        <a href="mailto:trupti.hosamani7@gmail.cm">trupti.hosamani7@gmail.cm</a>
                    </div>
                    <p className="lead mb-5">I am Full Stack Developer. I love working on ReactJS, Ruby on Rails technologies.</p>
                    <div className="social-icons">
                        <a className="social-icon" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
                        <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Experience */}
            <section className="resume-section" id="experience">
                <div className="resume-section-content">
                    <h2 className="mb-5">Experience</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Senior Web Developer</h3>
                            <div className="subheading mb-3">Intelitec Solutions</div>
                            <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">March 2013 - Present</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Senior Full Stack Developer</h3>
                            <div className="subheading mb-3">YourMechanic</div>
                            <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">March 2020 - Current</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Full Stack Developer</h3>
                            <div className="subheading mb-3">InfiniChains</div>
                            <p>Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail. Keeping your eye on the ball while performing a deep dive on the start-up mentality to derive convergence on cross-platform integration.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">July 2018 - Jan 2020</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Full Stack Developer</h3>
                            <div className="subheading mb-3">Shout! Media Productions</div>
                            <p>Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer directed convergence without revolutionary ROI.</p>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Dec 2013 - March 2016</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Education */}
            <section className="resume-section" id="education">
                <div className="resume-section-content">
                    <h2 className="mb-5">Education</h2>
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Bachelor of Engineering</h3>
                            <div className="subheading mb-3">GMIT Davangere, India</div>
                            <div>Computer Science</div>
                            {/* <p></p> */}
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">Oct 2004 - Jul 2008</span></div>
                    </div>
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                        <div className="flex-grow-1">
                            <h3 className="mb-0">Master of Science</h3>
                            <div className="subheading mb-3">Santa Clara University, Santa Clara</div>
                            <div>Computer Science</div>
                        </div>
                        <div className="flex-shrink-0"><span className="text-primary">March 2011 - May 2013</span></div>
                    </div>
                </div>
            </section>
            <hr className="m-0" />
            {/* Skills */}
            <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages & Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                        <li className="list-inline-item"><i className="fab fa-react"></i></li>
                        <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                        <li className="list-inline-item"><i className="fab fa-sass"></i></li>
                        <li className="list-inline-item"><i className="fab fa-less"></i></li>
                        <li className="list-inline-item"><i className="fab fa-yarn"></i></li>
                        <li className="list-inline-item"><i className="fab fa-npm"></i></li>
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Browser Testing & Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check"></i></span>
                            Agile Development & Scrum
                        </li>
                    </ul>
                </div>
            </section>
            <hr className="m-0" />
            {/* Interests */}
            <section className="resume-section" id="interests">
                <div className="resume-section-content">
                    <h2 className="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p className="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
            <hr className="m-0" />
            {/* Awards */}
            <section className="resume-section" id="awards">
                <div className="resume-section-content">
                    <h2 className="mb-5">Projects</h2>
                        <ul className="fa-ul mb-0">
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                <Link to="/covid_tracker">Covid Tracker</Link>
                            </li>
                            <li>
                                <span className="fa-li"><i className="fas fa-trophy text-warning"></i></span>
                                <Link to="/todo">Todo</Link>
                            </li>
                        </ul>

                </div>
            </section>
        </div>
      </>
    );
  }
}

export default Resume;