import React, { forwardRef } from "react";
import Ledgerline from "./Ledgerline";

const Content = () => (
  <div className="content-wrapper">
    <Ledgerline text={"Portfolio"} />
    <h1>
      hello, <br />
      i'm <span>alie</span>
    </h1>
    <p className="sub-content">Frontend developer, motion and graphic designer since 2016.</p>
    <div className="spacer"/>
    <Ledgerline text={"About me"} />
    <p className="about-content">I have always been in awe with <span>interactive designing</span>.</p>
    <p>And it's my goal to challenge myself and do things that I'm passionate about and have fun while doing it.</p>
    <div className="spacer"/>
    <Ledgerline text={"Works"} />
    <p className="works-content"><span>For the past years, I have been building e-commerce sites, landing pages, microsites etc.</span></p>
    <p>I focus on building the frontend side using modern technology stacks. Some of my roles are delivering UI/UX designs into a working digital assets, polishing interfaces, testing for accessibility, optimizing web pages, automating processes, browser testing and such.</p>
    <div className="spacer"/>
    <Ledgerline text={"Contact"} />
    <p className="works-content"><span>Let's build cool stuffs<sup className="sup">*</sup> together</span></p>
    <p>Want to learn more about me? <br/> Shoot me a mail <a href="mailto:morenoanalie14@gmail.com">here</a>.</p>
    <p className="footnote">* This site is undergoing renovations. <br/>Awesome cooler stuffs is on its way.</p>
  </div>
);

export default Content;
