"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navigation = [
  { name: "About", href: "#about" },
  {name:"Education" , href:"#education"},
  {name:"Skills",href:"#skills"},
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-background/80 border-b border-primary/10">
      <nav className="flex items-center justify-between p-4 sm:p-6 lg:px-8 max-w-7xl mx-auto" aria-label="Global">
       
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5 text-lg sm:text-xl font-semibold font-serif text-primary">
            Suhani Sahu
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

       
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-base lg:text-lg font-semibold font-serif leading-6 text-primary hover:text-blue-400 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Theme Toggle for Desktop */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "" : "hidden"}`}>
        {/* Backdrop overlay */}
        <div
          className="fixed inset-0 z-40 bg-black/10"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Side Menu */}
        <div
          className={`fixed inset-y-0  z-50 w-3/4 max-w-xs bg-background p-6 transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center flex-col justify-between">
             
            <Button
              variant="ghost"
              className="-m-2.5  rounded-md p-2.5 text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
            
              <X className="h-6 w-6 text-primary" aria-hidden="true" />
            </Button>
          </div>

          {/* Mobile Navigation Links */}
          <div className="mt-6">
            <div className="space-y-2">
              {navigation.map((item) => (

                <a
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-semibold text-primary hover:bg-blue-400"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-6 text-primary">
              <ThemeToggle  />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
