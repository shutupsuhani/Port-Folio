"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";
import { TypewriterEffect } from "../ui/typewritereffect";
import { Scene } from "../scene";  // Import Scene component

export function Hero() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });



  return (
    <section className="relative min-h-screen font-serif flex bg-primary/10 items-center justify-center py-20 px-6 lg:px-8">
      {/* Background 3D Scene */}
      
      <Scene/>
      <motion.div
        className="max-w-7xl mx-auto text-center lg:text-center items-center"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
              Suhani Sahu
            </h1>

            <div className="typewriter-wrapper mx-auto max-w-md">
                <TypewriterEffect/>
            </div>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Passionate about building exceptional web applications and distributed systems.
            Specializing in TypeScript, React, and cloud technologies.
          </motion.p>

          <motion.h1
            className="flex flex-wrap gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Find Me On
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button size="lg" asChild>
              <a href="#contact" className="gap-2">
                Get in Touch <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/shutupsuhani" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Github className="w-4 h-4" />
              </a>
            </Button>
            <Button className="bg-blue-800" size="lg" variant="outline" asChild>
              <a href="https://www.linkedin.com/in/suhanisahu/" target="_blank" rel="noopener noreferrer" className="gap-2">
                <Linkedin className="w-4 h-4" />
              </a>
            </Button>
             
            <Button size="lg" className="bg-black" variant="outline" asChild>
              <a href="https://leetcode.com/u/shutupsuhani" target="_blank" rel="noopener noreferrer" className="gap-2">
                <img  src="./leetcode.jpg" width={30} height={30}/>
              </a>
            </Button>

            
            <Button size="lg" className="bg-white" variant="outline" asChild>
              <a href="https://codeforces.com/profile/shutupsuhani" target="_blank" rel="noopener noreferrer" className="gap-2">
                <img src="./codeforces.png" width={30} height={30}/>
              </a>
            </Button>

            <Button size="lg" className="bg-black" variant="outline" asChild>
              <a href="https://medium.com/@shutupsuhani" target="_blank" rel="noopener noreferrer" className="gap-2">
                <img src="./medium.png" width={30} height={30}/>
              </a>
            </Button>

            <Button size="lg" className="bg-white" variant="outline" asChild>
              <a href="https://www.codechef.com/users/shutupsuhani" target="_blank" rel="noopener noreferrer" className="gap-2">
                <img src="./codechef.jpg" width={30} height={30}/>
              </a>
            </Button>



          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}