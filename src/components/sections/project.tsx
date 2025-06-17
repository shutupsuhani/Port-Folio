"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 ,ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    title: "Content-Flow-AI",
    description: " A real-time Content Generator Web Application for Content Creators and Effective for real time use.",
    tech: ["React Js", "Next Js","Clerk Authentication","Gemini", "Rest API", "Razor Pay Payment Gateway","Drizzle ORM"],
    link: "https://github.com/shutupsuhani/News4U",
    github: "https://content-flow-ai.vercel.app"
  },
  {
    title: "Quick-Prep",
    description: "A real Time Mock Interview Full Stack Web Application.",
    tech: ["React Js", "Next Js","Clerk", "Tailwind CSS","Gemini","Drizzle ORM"],
    link: "https://quick-prep-delta.vercel.app/",
    github: "https://github.com/shutupsuhani/quick-prep/"
  },
   
  {
    title: "Efficio",
    description: "A Task Tracker and Management Full Stack Web Application.",
    tech: ["React Js", "Next Js","Clerk", "Tailwind CSS","Mongo DB"],
    link: "https://task-management-app-y9ga.vercel.app/",
    github: "https://github.com/shutupsuhani/Task-Management-App"
  },

  {
    title: "Social Media Web Application",
    description: "Enterprise task management system with real-time updates and team collaboration features.",
    tech: ["React Js", "Redux Js", "Node Js","Express Js","MongoDB", "Socket IO"],
    link: "https://github.com/shutupsuhani/SOCIALBOOK",
    github: "https://github.com/shutupsuhani/SOCIALBOOK"
  }
];

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-16 text-primary px-6 lg:px-8 font-serif max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={itemVariants}
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex flex-col h-full">
                <div className="p-6 flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Code2 className="w-6 h-6" />
                    <div className="flex gap-2">
                      <a href={project.github} className="hover:text-primary">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href={project.link} className="hover:text-primary">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div initial="hidden" className="mt-6"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}>
          <Button size="lg" asChild>
              <a href="https://github.com/shutupsuhani/" className="dark:text-white text-black gap-2">
                 More Projects <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
      </motion.div>
    </section>
  );
}