import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/project";
import { Skills } from "@/components/sections/skills";
import { Scene } from "@/components/scene";

export default function Home() {
  return (
    <>
    
    <div>
     <Scene /> 
    <Navbar/>
    <Hero/>
    <About/>
    <Education/>
    <Projects/>
    <Experience/>
    <Skills/>
    <Contact/>
    </div>
    
    </>
    
  );
}
