"use client";
import { Carousel } from "@/components/carousel/carousel";
import { useState, useRef, useEffect } from "react";

import "@/components/projects/page.css";

export default function Projects() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
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
    <div>
      <div className="projectMainTile" style={{width:"200vw" , marginTop:"400px"}}>
          <h1 style={{ marginLeft:`${(70-scrollPosition/0.8)}%` , opacity:0.3}}>My Work</h1>
        </div>
      <div className="projectMain">
       
        <div className="projectMainCarousel"></div>
      </div>
    </div>
  );
}
