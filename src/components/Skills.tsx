
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    id: 1,
    name: "Frontend Development",
    skills: [
      { name: "HTML/CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "React", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Next.js", level: 75 },
    ],
  },
  {
    id: 2,
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 70 },
      { name: "Express", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "SQL", level: 55 },
    ],
  },
  {
    id: 3,
    name: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Figma", level: 75 },
      { name: "Webpack", level: 70 },
      { name: "Jest", level: 65 },
      { name: "Docker", level: 45 },
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
