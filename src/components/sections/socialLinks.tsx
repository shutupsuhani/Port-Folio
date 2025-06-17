import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Github, 
  Linkedin, 
  ArrowRight, 
  ExternalLink,
  FileText,
  Code,
  Trophy,
  Zap
} from 'lucide-react';

interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary';
  className?: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    href: 'https://github.com/shutupsuhani',
    icon: <Github className="w-4 h-4" />,
    variant: 'outline',
    className: 'hover:bg-gray-100 dark:hover:bg-gray-800'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/suhanisahu/',
    icon: <Linkedin className="w-4 h-4" />,
    variant: 'outline',
    className: 'hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-200 dark:hover:border-blue-800'
  },
  {
    name: 'LeetCode',
    href: 'https://leetcode.com/u/shutupsuhani',
    icon: <Code className="w-4 h-4" />,
    variant: 'outline',
    className: 'hover:bg-orange-50 dark:hover:bg-orange-900/20 hover:border-orange-200 dark:hover:border-orange-800'
  },
  {
    name: 'Codeforces',
    href: 'https://codeforces.com/profile/shutupsuhani',
    icon: <Trophy className="w-4 h-4" />,
    variant: 'outline',
    className: 'hover:bg-red-50 dark:hover:bg-red-900/20 hover:border-red-200 dark:hover:border-red-800'
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@shutupsuhani',
    icon: <FileText className="w-4 h-4" />,
    variant: 'outline',
    className: 'hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-200 dark:hover:border-green-800'
  },
  {
    name: 'CodeChef',
    href: 'https://www.codechef.com/users/shutupsuhani',
    icon: <Zap className="w-4 h-4" />,
    variant: 'outline',
    className: 'hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-200 dark:hover:border-purple-800'
  }
];

interface SocialLinksProps {
  showGetInTouch?: boolean;
  className?: string;
}

export function SocialLinks({ showGetInTouch = true, className = '' }: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap gap-3 justify-center lg:justify-start ${className}`}>
      {showGetInTouch && (
        <Button 
          size="lg" 
          asChild
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <a href="#contact" className="gap-2 group">
            Get in Touch 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </a>
        </Button>
      )}
      
      {socialLinks.map((link) => (
        <Button
          key={link.name}
          size="lg"
          variant={link.variant}
          asChild
          className={`
            transition-all duration-300 transform hover:scale-105 hover:shadow-md
            border border-gray-200 dark:border-gray-700
            ${link.className}
          `}
        >
          <a 
            href={link.href} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="gap-2 group"
            aria-label={`Visit my ${link.name} profile`}
          >
            <span className="group-hover:scale-110 transition-transform duration-200">
              {link.icon}
            </span>
            <span className="hidden sm:inline">{link.name}</span>
            <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
        </Button>
      ))}
    </div>
  );
}