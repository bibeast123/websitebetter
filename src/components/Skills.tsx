
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const skillCategories = [
  {
    id: 1,
    name: "Languages",
    skills: [
      "Java", "Python", "TypeScript/JavaScript", "C/C++", 
      "Kotlin", "HTML/CSS", "SQL"
    ],
  },
  {
    id: 2,
    name: "Frameworks & Libraries",
    skills: [
      "React", "Angular", "Node.js", "Flask/FastAPI", 
      "TensorFlow", "pandas/NumPy"
    ],
  },
  {
    id: 3,
    name: "Tools & Platforms",
    skills: [
      "Git", "Docker", "AWS", "Azure Databricks", 
      "Kubernetes", "JIRA"
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <Card key={category.id} className="shadow-md h-full">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6 text-center text-primary">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <span className="text-primary mr-2">•</span>
                      <span className="font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
