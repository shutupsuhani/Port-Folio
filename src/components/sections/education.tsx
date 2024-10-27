"use client";

import { motion } from "framer-motion";
import { GraduationCap, Percent } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInView } from "react-intersection-observer";

const education = [
    {
        school: "Dr. APJ Abdul Kalam Technical University",
        degree: "B.Tech in Computer Science and Engineering",
        period: "2022 - Present",
        description: "I am currently pursuing a B.Tech major in Computer Science and Engineering at Ajay Kumar Garg Engineering College, affiliated with Dr. APJ Abdul Kalam Technical University.",
        gpa: "8.41/10"
    },
    {
        school: "Swami Vivekanand Saraswati Vidya Mandir",
        degree: "12th Standard (PCM)",
        period: "2022",
        description: "I completed my 12th standard with a score of 95.6%.",
        gpa: "95.6%"
      },

      {
        school: "Swami Vivekanand Saraswati Vidya Mandir",
        degree: "10th Standard ",
        period: "2020",
        description: "I completed my 12th standard with a score of 94%.",
        gpa: "94%"

      }
];

export function Education() {
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
    <section id="education" className="py-16 bg-primary/10 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        className="font-serif"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-bold mb-8 text-primary"
          variants={itemVariants}
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6 border-primary/10 hover:border-primary/20 transition-colors">
                <div className="flex items-start gap-4">
                  <GraduationCap className="w-6 h-6 mt-1 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{edu.degree}</h3>
                    <p className="text-muted-foreground mb-2">
                      {edu.school} • {edu.period}
                    </p>
                    <p className="mb-2">{edu.description}</p>
                    <p className="text-sm text-primary">Grade: {edu.gpa}</p>
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