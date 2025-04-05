
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern | Generative AI",
    company: "AT&T",
    location: "Dallas, TX",
    period: "June 2024 - August 2024",
    description:
      "Developed a Generative AI automation tool using React, Azure, Databricks, and FastAPI, streamlining audit tax request processing by 35%. Presented to CEO and board, leading to company-wide adoption and $25 million in annual cost savings. Engineered a call center solution with Python, Flask, and React with a custom language model for instantaneous transcription, boosting response time by 55% (patent pending).",
    technologies: ["React", "Azure", "Databricks", "FastAPI", "Python", "Flask"],
  },
  {
    id: 2,
    role: "Software Engineer Intern | Full-Stack",
    company: "AT&T",
    location: "Dallas, TX",
    period: "June 2023 - August 2023",
    description:
      "Developed an AI Data Usage Optimizer using Flask, Python, and HTML/CSS for proactive data plan adjustments, increasing customer retention by 33% (patent pending). Enhanced TOM application using Angular, Java, SQL, and REST APIs, significantly improving user experience for 2,000 weekly unique users. Implemented a scalable bug-tracking system using JIRA, improving issue resolution time by 30%.",
    technologies: ["Angular", "Java", "SQL", "Flask", "Python", "JIRA"],
  },
  {
    id: 3,
    role: "Software Engineer Intern | Data Analytics",
    company: "Federal Aviation Administration",
    location: "Fort Worth, TX",
    period: "June 2022 - May 2023",
    description:
      "Created monthly Tableau dashboards to track 30,000+ clearance activities for FAA security teams. Automated FAA document analysis using Python web scraping, identifying over 3,000 instances of exclusive language. Authored a policy recommendation to change the language used in all FAA policies to inclusive language, affecting the agency's 45,000 employees.",
    technologies: ["Tableau", "Python", "Data Analytics", "Web Scraping"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-secondary/50 py-20 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
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
