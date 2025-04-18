
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-12">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto text-center mb-12">
          <p className="text-lg text-muted-foreground">
            I'm currently a computer science student at UT Austin. Whether you have a
            question about my work or would like to connect, I'll get back to you as soon as possible!
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
                    href="mailto:bidhan.devkota@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="Email"
                  >
                    <Mail className="h-8 w-8 text-primary" />
                  </a>
                </Button>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a
                  href="mailto:bidhan.devkota@gmail.com"
                  className="text-primary hover:underline"
                >
                  bidhan.devkota@gmail.com
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
                    href="https://www.linkedin.com/in/bidhan-devkota/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-8 w-8 text-primary" />
                  </a>
                </Button>
                <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                <a
                  href="https://www.linkedin.com/in/bidhan-devkota/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/bidhan-devkota
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
                    href="https://github.com/bibeast123" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Github className="h-8 w-8 text-primary" />
                  </a>
                </Button>
                <h3 className="text-lg font-medium mb-1">GitHub</h3>
                <a
                  href="https://github.com/bibeast123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/bibeast123
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
                    href="public/BidhanDevkotaResume.pdf" 
                    download="Bidhan_Devkota_Resume.pdf"
                    aria-label="Resume"
                  >
                    <FileDown className="h-8 w-8 text-primary" />
                  </a>
                </Button>
                <h3 className="text-lg font-medium mb-1">Resume</h3>
                <a
                  href="public/BidhanDevkotaResume.pdf"
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
