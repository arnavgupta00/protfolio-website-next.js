"use client";

import "@/components/about/page.css";
import { useState, useRef, useEffect } from "react";
import { aboutRefAdd } from "@/components/refManagements";
export default function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    aboutRefAdd(aboutRef);
    const handleScroll = () => {
      const position = window.pageYOffset;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (position / maxScroll) * 100;
      setScrollPosition(scrollPercentage);
      console.log(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={aboutRef}>
      <div className="aboutMain">
        <div
          className="aboutMainTile"
          style={{
            position: "absolute",
            zIndex: "-1",
            marginLeft:
              scrollPosition > 35 ? `${-200 + scrollPosition * 2}%` : "-200%",
          }}
        >
          <h1>About me</h1>
        </div>
        <div className="aboutMainContent">
          <section className="design-section">
            <div className="timeline">
              <div className="timeline-empty"></div>

              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-component timeline-content">
                <h3>Education</h3>
                <p>
                  Some TextSome TextSome TextSome TextSome TextSome TextSome
                  TextSome Text
                </p>
              </div>
              <div className="timeline-component timeline-content">
                <h3>Tech Stack</h3>
                <p>
                  Some TextSome TextSome TextSome TextSome TextSome TextSome
                  TextSome TextSome TextSome TextSome TextSome TextSome TextSome
                  TextSome TextSome TextSome TextSome Text
                </p>
              </div>
              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-empty"></div>

              <div className="timeline-empty"></div>

              <div className="timeline-middle">
                <div className="timeline-circle"></div>
              </div>
              <div className="timeline-component timeline-content">
                <h3>Personality </h3>
                <p>
                  Some TextSome TextSome TextSome TextSome TextSome TextSome
                  TextSome TextSome TextSome TextSome TextSome TextSome TextSome
                  TextSome TextSome TextSome TextSome Text
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
