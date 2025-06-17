"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "react-intersection-observer";

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section  id="contact" className="py-16 bg-primary/5 px-6 font-serif lg:px-8 bg-muted/50">
      <motion.div
        className="max-w-7xl mx-auto text-center"
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2 
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I'm currently open to new opportunities and collaborations. 
          Whether you have a question or just want to say hi, feel free to reach out!
        </motion.p>
        
        {/* Add Phone Number Section */}
        <motion.div
          className="flex justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" variant="outline" asChild>
            <a href="tel:+91 9910820433"> 
              <Phone className="w-5 h-5 mr-2" />
               +91 9910820433
            </a>
          </Button>
        </motion.div>

        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" className="b-1" asChild>
            <a href="mailto:sahusuhani14@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://www.linkedin.com/in/suhanisahu/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
             
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="https://github.com/shutupsuhani" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
             
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
