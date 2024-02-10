"use client";
import { Carousel } from "@/components/carousel/carousel";
import { useState, useRef, useEffect } from "react";
import { projectRefAdd } from "@/components/refManagements";
import useMediaQuery from "@mui/material/useMediaQuery";


import "@/components/projects/page.css";

export default function Projects() {

  const isMobileOrTablet = useMediaQuery("(max-width: 767px)");

  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoveredGridItem, setHoveredGridItem] = useState(null);

  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    projectRefAdd(projectRef);
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

  const handleGridItemHover = (index: any) => {
    setHoveredGridItem(index);
  };

  return (
    <div ref={projectRef}>
      <div className="projectMain">
        <div
          className="projectMainTile"
          
        >
          <h1
            style={{
              marginLeft: !isMobileOrTablet ?`${70 - scrollPosition / 1.5}%` : `${50 - scrollPosition / 1.5}%`,
              // opacity: 0.3,
            }}
          >
            My Work
          </h1>
        </div>
        <div
          className="projectMainGrid"
          onMouseLeave={() => handleGridItemHover(null)}
          style={{
            display: "grid",
            gridTemplateColumns:
              hoveredGridItem === 0
                ? "90% 10%"
                : hoveredGridItem === 1
                ? "10% 90%"
                : hoveredGridItem === 2
                ? "90% 10%"
                : hoveredGridItem === 3
                ? "10% 90%"
                : "75% 25%",
            gridTemplateRows:
              hoveredGridItem === 0
                ? "90% 10%"
                : hoveredGridItem === 1
                ? "90% 10%"
                : hoveredGridItem === 2
                ? "10% 90%"
                : hoveredGridItem === 3
                ? "10% 90% "
                : "60% 40%",
            gap: "25px 25px",
          }}
        >
          <div
            className="projectMainGridObject"
            style={{ borderRadius: "25px" }}
            onMouseEnter={() => handleGridItemHover(0)}
          >
            <h1
              onClick={() => {
                window.open(
                  "https://github.com/arnavgupta00/VideoConferencingApp-NextJS",
                  "_blank"
                );
              }}
              style={{
                fontSize: isMobileOrTablet ? (hoveredGridItem === 0
                  ? "1.5rem"
                  : hoveredGridItem === null
                  ? "1rem"
                  : "0.2rem"
                ) : (
                  hoveredGridItem === 0
                    ? "3.5rem"
                    : hoveredGridItem === null
                    ? "1.5rem"
                    : "0.5rem"
                ),
                fontFamily: "Biotif Mid, sans-serif",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Video Conference Platform
            </h1>
          </div>
          <div
            className="projectMainGridObject"
            style={{ borderRadius: "25px" }}
            onMouseEnter={() => handleGridItemHover(1)}
          >
            <h1
              onClick={() => {
                window.open(
                  "https://github.com/arnavgupta00/FileSharingWebRTC",
                  "_blank"
                );
              }}
              style={{
                fontSize: isMobileOrTablet ? (hoveredGridItem ===1
                  ? "1.5rem"
                  : hoveredGridItem === null
                  ? "1rem"
                  : "0.2rem"
                ) : (
                  hoveredGridItem === 1
                    ? "3.5rem"
                    : hoveredGridItem === null
                    ? "1.5rem"
                    : "0.5rem"
                ),
                fontFamily: "Biotif Mid, sans-serif",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              File Sharing System
            </h1>
          </div>
          <div
            className="projectMainGridObject"
            style={{ borderRadius: "25px" }}
            onMouseEnter={() => handleGridItemHover(2)}
          >
            <h1
              onClick={() => {
                window.open(
                  "https://github.com/arnavgupta00/eccomerce-website",
                  "_blank"
                );
              }}
              style={{
                fontSize: isMobileOrTablet ? (hoveredGridItem === 2
                  ? "1.5rem"
                  : hoveredGridItem === null
                  ? "1rem"
                  : "0.2rem"
                ) : (
                  hoveredGridItem === 2
                    ? "3.5rem"
                    : hoveredGridItem === null
                    ? "1.5rem"
                    : "0.5rem"
                ),
                fontFamily: "Biotif Mid, sans-serif",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Ecommerce
            </h1>
          </div>
          <div
            className="projectMainGridObject"
            style={{ borderRadius: "25px" }}
            onMouseEnter={() => handleGridItemHover(3)}
          >
            <h1
              onClick={() => {
                window.open(
                  "https://github.com/arnavgupta00/gemini_bot_discord",
                  "_blank"
                );
              }}
              style={{
                fontSize: isMobileOrTablet ? (hoveredGridItem === 3
                  ? "1.5rem"
                  : hoveredGridItem === null
                  ? "1rem"
                  : "0.2rem"
                ) : (
                  hoveredGridItem === 3
                    ? "3.5rem"
                    : hoveredGridItem === null
                    ? "1.5rem"
                    : "0.5rem"
                ),
                fontFamily: "Biotif Mid, sans-serif",
                cursor: "pointer",
                textAlign: "center",
              }}
            >
              Gemini Discord Bot
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
