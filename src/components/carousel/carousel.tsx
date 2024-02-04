"use client"


import { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

import { Github , Link  } from 'lucide-react';

import { Parallax, ParallaxLayer, ParallaxProps } from '@react-spring/parallax';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

import "./page.css";

interface CarouselProps {
  autoPlay: string;
  height: string;
  width: string;
  borderRadii: string;
  marginTop: string;
}

export function Carousel(props: CarouselProps) {
  const [page, setPage] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const parallaxRef = useRef<any>(null);
  const controls = useAnimation();
  const x = useMotionValue(0);

  const goToNext = () => {
    if (page < listProjects.length - 1) {
      setPage(page + 1);
      parallaxRef.current?.scrollTo(page + 1);
    }
    if (page === listProjects.length - 1) {
      setPage(0);
      parallaxRef.current?.scrollTo(0);
    }
  }

  const goToPrevious = () => {
    if (page > 0) {
      setPage(page - 1);
      parallaxRef.current?.scrollTo(page - 1);
    }
    if (page === 0) {
      setPage(listProjects.length - 1);
      parallaxRef.current?.scrollTo(listProjects.length - 1);
    }
  }

  const scrollToButton = (ind: number) => {
    setPage(ind);
    parallaxRef.current?.scrollTo(ind);
  }

  const handleDrag = (e: MouseEvent | TouchEvent, info: any) => {
    x.set(info.offset.x);
  };

  const handleDragEnd = () => {
    if (x.get() > 100) {
      goToPrevious();
      // Right swipe detected
    } else if (x.get() < -100) {
      goToNext();
      // Left swipe detected
    }
    x.set(0);
  };

  useEffect(() => {
    // Auto-play interval in milliseconds 
    if (props.autoPlay === "true") {
      const interval = 3000;

      const autoPlay = setInterval(() => {
        goToNext()
      }, interval);

      // Clear the interval when the component unmounts
      return () => clearInterval(autoPlay);
    }
  }, [props.autoPlay]);

  const listProjects = [{
    name: "Video Conference Web App",
    description: "This is a project",
    image: "https://www.solesearchindia.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdx8gt3nnu%2Fimage%2Fupload%2Fq_100%2Cf_webp%2Fw_1500%2Fbanners%2Fall-out-sale%2FdesktopImage&w=1920&q=100",
    link: "https://www.google.com",
    github: "https://www.google.com",
  },
  {
    name: "File Sharing Web App",
    description: "This is a project",
    image: "https://www.solesearchindia.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdx8gt3nnu%2Fimage%2Fupload%2Fq_100%2Cf_webp%2Fw_1500%2Fbanners%2FSneakers%20Banner%2FdesktopImage&w=1920&q=100",
    link: "https://www.google.com",
    github: "https://www.google.com",
  },
  {
    name: "E-commerce Website",
    description: "This is a project",
    image: "https://www.solesearchindia.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdx8gt3nnu%2Fimage%2Fupload%2Fq_100%2Cf_webp%2Fw_1500%2Fbanners%2FSneakers%20Banner%2FdesktopImage&w=1920&q=100",
    link: "https://www.google.com",
    github: "https://www.google.com",
  },
  {
    name: "Project 4",
    description: "This is a project",
    image: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/sweatshirts-homepage.jpg?format=webp&w=1500&dpr=1.3",
    link: "https://www.google.com",
    github: "https://www.google.com",
  }]

  return (
    <motion.div onHoverEnd={() => setIsHovering(false)} onHoverStart={() => setIsHovering(true)} style={{ height: props.height, width: props.width, borderRadius: props.borderRadii }}>
      <Parallax
        className="parallax"
        style={{ height: props.height, width: props.width, borderRadius: props.borderRadii, overflow: "hidden" }}
        pages={listProjects.length}
        horizontal
        ref={parallaxRef}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={{ x: x.get() }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          {listProjects.map((x, index) => (
            <ParallaxLayer key={index} offset={index} speed={0.1} >
             
              <div draggable={false} style={{ backgroundImage: `url(${x.image})`,backgroundSize:"cover", backgroundRepeat:"no-repeat" ,  height: props.height, width: props.width, objectFit: 'cover', borderRadius: props.borderRadii }} >
                <div style={{display:"flex", justifyContent:"space-between" , alignItems:"center", flexDirection:"column" ,height: props.height, width: props.width,}}>
                  <div style={{backgroundColor:"#209fcd41", color:"white" ,width:"98.2%", paddingLeft:"25px", borderTopLeftRadius:"10px", borderTopRightRadius:"10px" , boxShadow:"5px 5px 5px rgba(0, 0, 0, 0.2), -5px -5px 5px rgb(233, 232, 232)"}}>
                    <div style={{display:"flex", justifyContent:"space-between" , alignItems:"center", flexDirection:"row" , width:"95%" ,height:"75px"}}>
                      <h1 style={{fontFamily:"Montserrat"}}>
                        {x.name}
                      </h1>
                      <div style={{display:"flex", justifyContent:"flex-end" , gap:"15px",alignItems:"center", flexDirection:"row"}}>
                        <Github onClick={()=>{window.open(x.link , "_blank")}}  style={{color:"white"}}/>
                        <Link onClick={()=>{window.open(x.github , "_blank")}}  style={{color:"white"}}/>
                      </div>
                    </div>
                  </div>
                  <div style={{height: "120px" ,width:"100%", backgroundColor:"#209fcd41", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px", visibility: isHovering ? 'visible' : "hidden" , boxShadow:"5px 5px 5px rgb(171, 170, 170), -5px -5px 5px rgba(0, 0, 0, 0.2)" }}>
                    <p style={{fontFamily:"verdana",padding:"15px" ,color:"white"}}>
                      {x.description}
                    </p>
                  </div>
                                  
                </div>
              </div>
            </ParallaxLayer>
          ))}
        </motion.div>
      </Parallax>
      <div className='productDots' style={{ width: props.width, height: props.height, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <div className='carouselChange' style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'row', width: props.width, height: props.height, visibility: isHovering ? 'visible' : "hidden" }}>
          <IoIosArrowBack
            style={{ height: '50px', width: '30px', zIndex: '5',color:"white", opacity: '0.5', borderTopRightRadius: "15px", borderBottomRightRadius: "15px", marginTop: props.marginTop }}
            onClick={goToPrevious}
          />
          <IoIosArrowForward
            style={{ height: '50px', width: '30px', zIndex: '5',color:"white", opacity: '0.5', borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", marginTop: props.marginTop }}
            onClick={goToNext}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "17px", width: "max-content", backgroundColor: "black", opacity: "0.5", borderRadius: "25px", paddingLeft: "7px", paddingRight: "7px", alignSelf: "center", marginBottom: "9px" }}>
          {listProjects.map((x, index) => (
            <button className={`productDotsDots ${page === index ? 'active' : ''}`} onClick={() => scrollToButton(index)} key={index}></button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
