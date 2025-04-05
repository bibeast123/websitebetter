
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    id: 1,
    name: "Languages",
    skills: [
      { name: "Java", level: 90 },
      { name: "Python", level: 85 },
      { name: "TypeScript/JavaScript", level: 80 },
      { name: "C/C++", level: 75 },
      { name: "Kotlin", level: 70 },
      { name: "HTML/CSS", level: 85 },
      { name: "SQL", level: 75 },
    ],
  },
  {
    id: 2,
    name: "Frameworks & Libraries",
    skills: [
      { name: "React", level: 85 },
      { name: "Angular", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "Flask/FastAPI", level: 75 },
      { name: "TensorFlow", level: 70 },
      { name: "pandas/NumPy", level: 80 },
    ],
  },
  {
    id: 3,
    name: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Azure Databricks", level: 70 },
      { name: "Kubernetes", level: 65 },
      { name: "JIRA", level: 80 },
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
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
