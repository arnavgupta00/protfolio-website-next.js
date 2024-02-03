"use client"

import Navbar from "@/components/navbar/page";
import FirstPage from "@/components/first-page/page";
import Projects from "@/components/projects/page"
export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <FirstPage></FirstPage>
      <Projects></Projects>
    </main>
  );
}
