
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container text-center">
          <p>© {new Date().getFullYear()} Your Name | Portfolio</p>
          <p className="text-sm mt-2 text-primary-foreground/80">
            Designed and built with ❤️
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
