"use client";

import "@/components/about/page.css";
import { useState, useRef, useEffect } from "react";
import { aboutRefAdd } from "@/components/refManagements";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const aboutRef = useRef<HTMLDivElement>(null);
  const isMobileOrTablet = useMediaQuery("(max-width: 767px)");

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
    <div ref={aboutRef} style={{paddingBottom:"150px"}}>
      <div className="aboutMain">
        <div
          className="aboutMainTile"
          style={{
            position: "absolute",
            zIndex: "-1",
            marginLeft: isMobileOrTablet
              ? scrollPosition > 35
                ? `${-200 + scrollPosition * 2.5}%`
                : "-200%"
              : scrollPosition > 35
              ? `${-200 + scrollPosition * 2}%`
              : "-200%",
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
              <div
                className="timeline-component timeline-content"
                style={{ padding: "30px" }}
              >
                <h3>Education</h3>
                <p style={{ fontFamily: "verdana", marginTop: "10px" }}>
                  Currently pursuing B.Tech in Computer Science and Engineering
                  at Thapar Institute of Engineering and Technology, Patiala.
                </p>
              </div>
              <div
                className="timeline-component timeline-content"
                style={{ padding: "30px", paddingLeft: "40px" }}
              >
                <h3>Tech Stack</h3>
                <p style={{ fontFamily: "verdana", marginTop: "10px" }}>
                  <ul>
                    <li>
                      Frontend: React, Next.js, HTML, CSS, JavaScript,
                      TypeScript
                    </li>
                    <li>
                      Backend: WebSocket's , WebRTC , Node.js, Express.js,
                      MongoDB
                    </li>
                    <li>Others: Git, Docker , Selenium Web driver , Kivy </li>
                  </ul>
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
              <div
                className="timeline-component timeline-content"
                style={{ padding: "30px", paddingLeft: "40px" }}
              >
                <h3>Personality </h3>
                <p  style={{ fontFamily: "verdana", marginTop: "10px" }}>
                  I possess a calm and composed nature, coupled with dedication
                  and hard work. My skills are complemented by a quick learning
                  ability, allowing me to adapt efficiently to new tasks.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
