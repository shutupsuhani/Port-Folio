"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Layout, Server, Settings, CoffeeIcon } from "lucide-react";
import { SiNextdotjs, SiMongodb, SiTypescript, SiMysql, SiFigma, SiJavascript, SiCplusplus, SiCss3, SiHtml5, SiReact, SiNodedotjs, SiExpress, SiSpringboot, SiPython, SiAwslambda, SiGithub, SiFirebase, SiTailwindcss, SiRedux, SiPostgresql, SiPostman } from "react-icons/si";
import { DiDocker, DiJava, DiPython } from "react-icons/di";

const skillCategories = [
  {
    title: "General Skills",
    icon: Code2,
    skills: [
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <DiJava />, name: "Java" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiGithub />, name: "GitHub" },
    ]
  },
  {
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { icon: <SiHtml5 />, name: "HTML" },
      { icon: <SiCss3 />, name: "CSS" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiFigma />, name: "Figma" },
      { icon: <SiReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiTypescript />, name: "TypeScript" },
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiSpringboot />, name: "Spring Boot" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <SiPostman />, name: "Postman" },
    ]
  },
  {
    title: "Database & Cloud",
    icon: Database,
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiMysql />, name: "MySQL" },
      { icon: <SiAwslambda />, name: "AWS Lambda" },
      { icon: <DiDocker />, name: "Docker" },
    ]
  },
];

export function Skills() {
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
    <section id="skills" className="py-16 px-6 lg:px-8 bg-muted/50">
      <motion.div
        className="max-w-7xl mx-auto font-serif"
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.h2 
          className="text-3xl font-serif font-bold mb-8 text-center"
          variants={itemVariants}
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div className="flex items-center space-x-2" key={skillIndex}>
                      <span className="text-3xl text-primary">{skill.icon}</span>
                      
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
