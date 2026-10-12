import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-shell about-layout about-simple">
        <div className="about-main">
          <span className="section-kicker">
            <span /> ABOUT HZTECHCLOUD
          </span>

          <h2>
            Simple Technology. <span className="text-gradient">Real Business Value.</span>
          </h2>

          <p className="about-description">
            We help businesses build websites, create useful online applications,
            and get their services online. Our goal is to make technology easier
            to use so you can focus on running your business.
          </p>

          <a className="button-primary" href="#request">
            Tell Us What You Need <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
