"use client";
import { Carousel } from "@/components/carousel/carousel";

import "@/components/projects/page.css";
export default function Projects() {
  return (
    <div>
      <div className="projectMain">
        <div className="projectMainTile"><h1>Projects</h1></div>
        <div className="projectMainCarousel">

          <Carousel
            borderRadii="10px"
            marginTop="300px"
            list={["https://i.imgur.com/xNtDKZq.jpg"]}
            height="700px"
            width="90vw"
            autoPlay="true"
          />
        </div>
      </div>
    </div>
  );
}
