
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    period: "Jan 2021 - Present",
    description:
      "Led the development of a React-based dashboard application used by over 5,000 daily active users. Implemented state management with Redux and improved load times by 30% through code splitting and lazy loading.",
    technologies: ["React", "TypeScript", "Redux", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "Frontend Developer",
    company: "Digital Solutions",
    location: "New York, NY",
    period: "Mar 2018 - Dec 2020",
    description:
      "Built responsive web applications with React and Vue.js. Collaborated with UX designers to implement pixel-perfect interfaces and improved application performance through optimized rendering strategies.",
    technologies: ["React", "Vue.js", "JavaScript", "SCSS"],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "StartUp Labs",
    location: "Boston, MA",
    period: "Jun 2016 - Feb 2018",
    description:
      "Developed and maintained client websites using HTML, CSS, and JavaScript. Worked with a team of designers and developers to create custom WordPress themes and plugins.",
    technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-secondary/50 py-20 md:py-32">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-primary/20" />
              )}
              <Card className="shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-lg font-medium text-primary">
                        {exp.company}
                      </p>
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin size={16} className="mr-2" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
