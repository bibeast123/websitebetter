
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll get back to you as soon as
            possible!
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-lg">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-center p-6 text-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-full mb-4"
                  asChild
                >
                  <a 
                    href="mailto:bidhan.devkota@example.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Email"
                  >
                    <Mail className="h-8 w-8 text-primary" />
                  </a>
                </Button>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a
                  href="mailto:bidhan.devkota@example.com"
                  className="text-primary hover:underline"
                >
                  bidhan.devkota@example.com
                </a>
              </div>

              <div className="flex flex-col items-center p-6 text-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-full mb-4"
                  asChild
                >
                  <a 
                    href="https://www.linkedin.com/in/bidhandevkota" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-8 w-8 text-primary" />
                  </a>
                </Button>
                <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/bidhandevkota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/bidhandevkota
                </a>
              </div>

              <div className="flex flex-col items-center p-6 text-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-full mb-4"
                  asChild
                >
                  <a 
                    href="https://github.com/bidhandevkota" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-8 w-8 text-primary" />
                  </a>
                </Button>
                <h3 className="text-lg font-medium mb-1">GitHub</h3>
                <a
                  href="https://github.com/bidhandevkota"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/bidhandevkota
                </a>
              </div>

              <div className="flex flex-col items-center p-6 text-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-16 w-16 rounded-full mb-4"
                  asChild
                >
                  <a 
                    href="/resume.pdf" 
                    download="Bidhan_Devkota_Resume.pdf"
                    aria-label="Resume"
                  >
                    <FileDown className="h-8 w-8 text-primary" />
                  </a>
                </Button>
                <h3 className="text-lg font-medium mb-1">Resume</h3>
                <a
                  href="/resume.pdf"
                  download="Bidhan_Devkota_Resume.pdf"
                  className="text-primary hover:underline"
                >
                  Download CV
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
