import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";
import { Linkedin, Github, Mail } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-primary">
          Bidhan Devkota
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollTo("about")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollTo("experience")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Experience
          </button>
          <button
            onClick={() => scrollTo("skills")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Skills
          </button>
          <button
            onClick={() => scrollTo("projects")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="text-foreground/80 hover:text-primary transition-colors"
          >
            Contact
          </button>
        </nav>
        <div className="flex items-center space-x-4">
          {/* Social Media Icons */}
          <a
            href="https://www.linkedin.com/in/bidhan-devkota/" // Replace with your LinkedIn URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/bibeast123" // Replace with your GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="mailto:bidhan.devkota@gmail.com" // Replace with your email
            className="text-foreground hover:text-primary transition-colors"
          >
            <Mail size={20} />
          </a>
        </div>
        <Button 
          size="sm" 
          className="hidden md:flex items-center gap-2"
          asChild
        >
          <a href="/BidhanDevkotaResume.pdf" download="Bidhan_Devkota_Resume.pdf">
            <FileDown size={16} />
            Resume
          </a>
        </Button>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => {
            const mobileMenu = document.getElementById("mobile-menu");
            mobileMenu?.classList.toggle("hidden");
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className="hidden md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md shadow-md p-4"
      >
        <div className="flex flex-col space-y-3">
          <button
            onClick={() => {
              scrollTo("about");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
            className="text-foreground/80 hover:text-primary transition-colors py-2"
          >
            About
          </button>
          <button
            onClick={() => {
              scrollTo("experience");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
            className="text-foreground/80 hover:text-primary transition-colors py-2"
          >
            Experience
          </button>
          <button
            onClick={() => {
              scrollTo("skills");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
            className="text-foreground/80 hover:text-primary transition-colors py-2"
          >
            Skills
          </button>
          <button
            onClick={() => {
              scrollTo("projects");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
            className="text-foreground/80 hover:text-primary transition-colors py-2"
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollTo("contact");
              document.getElementById("mobile-menu")?.classList.add("hidden");
            }}
            className="text-foreground/80 hover:text-primary transition-colors py-2"
          >
            Contact
          </button>
          <Button 
            size="sm" 
            className="flex items-center gap-2 w-full justify-center"
            asChild
          >
            <a href="/BidhanDevkotaResume.pdf" download="Bidhan_Devkota_Resume.pdf">
              <FileDown size={16} />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
