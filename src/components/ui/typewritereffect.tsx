'use-client'

import { useState, useEffect } from "react";

const roles = [
  "Frontend Developer.",
  "Backend Developer.",
  "Full Stack Developer.",
  "Software Engineer.",
  "Competitive Programmer.",
];

export function TypewriterEffect() {
  const [text, setText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; // Typing speed (ms)
  const deletingSpeed = 50; // Deleting speed (ms)
  const pauseBetweenRoles = 1000; // Pause before starting next word (ms)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingTimeout = setTimeout(() => {
      // If deleting, remove characters from text; otherwise, add
      if (isDeleting) {
        setText((prevText) => prevText.slice(0, -1));
      } else {
        setText((prevText) => currentRole.slice(0, prevText.length + 1));
      }

      // Determine if the word is fully typed or deleted
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseBetweenRoles);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    // Cleanup timeout on unmount
    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, currentRoleIndex]);

  return (
    <span className="typewriter-text text-2xl font-serif">
      a {text}
      <span className="cursor">|</span>
    </span>
  );
}
