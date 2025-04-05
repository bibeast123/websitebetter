
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description:
      "A comprehensive dashboard for e-commerce businesses to track sales, inventory, and customer data in real-time.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Weather Application",
    description:
      "A responsive weather app that provides current conditions and forecasts for any location. Features include interactive maps and severe weather alerts.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    technologies: ["Vue.js", "JavaScript", "CSS", "Weather API"],
    liveLink: "#",
    repoLink: "#",
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "A full-stack application for managing tasks and projects. Includes features like drag-and-drop organization, due dates, and team collaboration.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveLink: "#",
    repoLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/50 py-20 md:py-32">
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
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
                    variant="default"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
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
