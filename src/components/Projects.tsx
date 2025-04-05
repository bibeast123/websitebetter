
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Austin Wheels",
    description:
      "A website serving the wheelchair-bound community in the Austin Area, providing information about wheelchair-accessible locations and transportation options in the Greater Austin Area.",
    image: "logoaw.20f707dc47846cab4257 (1).png",
    technologies: ["React", "JavaScript", "Accessibility", "Google Maps API"],
    liveLink: "#",
    repoLink: "https://github.com/bibeast123/austin-wheels",
  },
  {
    id: 2,
    title: "AI Data Optimizer",
    description:
      "Machine learning model with front end showing an Internet Usage recommender. Helps users optimize their data usage patterns and suggests better plans.",
    image: "generative-ai-social-1600x627 (1).png",
    technologies: ["Python", "Flask", "Machine Learning", "HTML/CSS"],
    liveLink: "#",
    repoLink: "https://github.com/bibeast123/ai-data-optimizer",
  },
  {
    id: 3,
    title: "Recell",
    description:
      "Full Stack website marketplace for people to list, discover and safely dispose of electronics. Features secure transactions, user ratings, and environmental impact tracking.",
    image: "recell im2 (1).png",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    repoLink: "https://github.com/bibeast123/recell",
  },
  {
    id: 4,
    title: "March Madness Predictor",
    description:
      "Machine learning project that aims to predict the outcome of March Madness matchups using historical data found on Kaggle.",
    image: "download (1).png",
    technologies: ["Python", "Machine Learning", "pandas", "NumPy", "Matplotlib"],
    liveLink: "#",
    repoLink: "https://github.com/bibeast123/march-madness-predictor",
  },
  {
    id: 5,
    title: "Amazon Price Tracker",
    description:
      "Automation Web Scraper using Python and Selenium that tracks product prices on Amazon and alerts users when prices drop below their target.",
    image: "download (2).png",
    technologies: ["Python", "Selenium", "Web Scraping", "Automation"],
    liveLink: "#",
    repoLink: "https://github.com/bibeast123/amazon-price-tracker",
  },
  {
    id: 6,
    title: "Tuner",
    description:
      "Takes in audio input from wav files and displays back what note is being played. Built using a custom OS system with real-time audio processing.",
    image: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb",
    technologies: ["C/C++", "Custom OS", "Audio Processing", "DSP"],
    liveLink: "#",
    repoLink: "https://github.com/bibeast123/tuner",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/50 py-20 md:py-12">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="mt-auto pt-4">
                <div className="flex gap-4 w-full">
                  <Button
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
