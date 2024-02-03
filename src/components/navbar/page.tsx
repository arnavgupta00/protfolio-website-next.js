"use client"

import "@/components/navbar/page.css"
import useMediaQuery from "@mui/material/useMediaQuery";


export default function Navbar() {
    const isMobileOrTablet = useMediaQuery("(max-width: 767px)");

    return (
        <div>
        <div className="navbar">
            <div className="navbarLeftBox">
            <h1>Arnav Gupta</h1>
            </div>
            <div className="navbarRightBox">
                <button className="button">Projects</button>
                <button className="button">About</button>
                <button className="button">Contact</button>
                <button className="button">GitHub</button>
            </div>
        </div>
        </div>
    );
}
