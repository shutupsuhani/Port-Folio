"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: "Github",
    position: "Github Global Campus Student",
    period: "March 2024 - Present",
    description: "Actively participated in code reviews and discussions, providing constructive feedback that improved overall code quality for 3 open-source projects."
 
  },
  {
    company: "Big Data Center of Excellence",
    position: "Web Developer Trainee",
    period: "Sep 2023 - Nov 2023",
    description: "Developed and maintained multiple client-facing applications using React and Node.js."
  },
  {
    company: "Oasis Infobyte",
    position: "Web Developer Trainee",
    period: "July 2023 - Aug 2023",
    description: "Implemented responsive web applications and REST APIs for various clients."
  }
];

export function Experience() {
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
    <section id="experience" className="py-16 px-6 bg-primary/10 text-primary font-serif lg:px-8 bg-muted/50">
      <motion.div
        className="max-w-7xl mx-auto"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8"
          variants={itemVariants}
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold">{exp.position}</h3>
                    <p className="text-muted-foreground mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    <p>{exp.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}