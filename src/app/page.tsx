import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Awards />
      </main>
      <Footer />
    </>
  );
}
