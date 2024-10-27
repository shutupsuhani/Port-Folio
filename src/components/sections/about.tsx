"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image"; // Make sure to import Image from next/image

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-16 text-xl text-primary font-serif px-6 mt-12 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 mt-12 gap-8">
          <motion.div
            className="flex justify-center items-center" // Center the image
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex justify-center border-2 border-primary rounded-full">
              <Image
                src="/mypic.jpeg"
                alt="My Picture"
                className="rounded-full object-cover w-36 h-36"
                width={144}
                height={144}
              />
            </div>
          </motion.div>
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-xl">
              Hey there! I'm Suhani Sahu, a full stack developer with a keen eye
              for detail and a passion for crafting elegant solutions.
              Functionality is my forte, and I thrive on building seamless
              experiences from front to back. When I'm not coding, you can find
              me exploring new technologies, refining my skills, or enjoying
              some downtime with a good book.
            </p>
            <p className="text-xl">
              Currently, I'm focused on building scalable web applications and
              microservices.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
