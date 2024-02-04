"use client"

import Navbar from "@/components/navbar/page";
import FirstPage from "@/components/first-page/page";
import Projects from "@/components/projects/page";
import About from "@/components/about/page";
export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <FirstPage></FirstPage>
      <Projects></Projects>
      <About></About>
    </main>
  );
}
