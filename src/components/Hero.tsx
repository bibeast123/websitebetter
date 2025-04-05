
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  const scrollToExperience = () => {
    const element = document.getElementById("experience");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-foreground/80 mb-6">
              Frontend Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I build exceptional and accessible digital experiences for the web.
              With a passion for clean code and user-centric design, I create
              solutions that are both beautiful and functional.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-full"
                onClick={scrollToExperience}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full"
                asChild
              >
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary rounded-full blur-xl opacity-70"></div>
              <div className="relative aspect-square w-64 sm:w-80 rounded-full overflow-hidden border-4 border-white shadow-xl bg-muted">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
                  alt="Professional portrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16 lg:mt-24 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={scrollToExperience}
          >
            <ArrowDownCircle size={36} className="text-primary" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
