"use client"

import "@/components/navbar/page.css"
import useMediaQuery from "@mui/material/useMediaQuery";
import React from "react";
import { aboutrefG, projectrefG } from "../refManagements";


export default function Navbar() {
    const isMobileOrTablet = useMediaQuery("(max-width: 767px)");
    
    const scrollToProjects = () => {
        projectrefG.current?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToAbout = () => {
        aboutrefG.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div>
            <div className="navbar">
                <div className="navbarLeftBox">
                    <h1>Arnav Gupta</h1>
                </div>
                <div className="navbarRightBox">
                    <button className="button" onClick={scrollToProjects}>Projects</button>
                    <button className="button" onClick={scrollToAbout}>About</button>
                    <button className="button">Contact</button>
                    <button className="button">GitHub</button>
                </div>
            </div>
        </div>
    );
}
