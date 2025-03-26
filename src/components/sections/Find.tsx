'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Contact2Icon, ContactRoundIcon, Github, Linkedin, LinkedinIcon, Mail, TwitterIcon } from 'lucide-react'
import Link from 'next/link';
import { color } from 'framer-motion';


const socialLinks = [
    { icon: <Linkedin />, href: 'https://www.linkedin.com/in/suhanisahu/'  }  ,
    { icon: <Github />, href: 'https://github.com/shutupsuhani' },
    { icon: <Mail />, href: 'mailto:shutupsuhani@gmail.com' },
    { icon: <img alt='img' src="./leetcode.jpg" width={20} height={20} />, href: 'https://leetcode.com/u/shutupsuhani' },
    { icon: <img alt='img' src="./codeforces.png" width={20} height={20} />, href: 'https://codeforces.com/profile/shutupsuhani' },
    { icon: <img alt='img' src="./medium.png" width={20} height={20} />, href: 'https://medium.com/@shutupsuhani' },
    { icon: <img alt='img' src="./codechef.jpg" width={20} height={20} />, href: 'https://www.codechef.com/users/shutupsuhani' },
  ];
  

const Find = () => {
    
    const [dropDown,setDropDown]=useState(false);

    
    
    return (
    <div >
      <Button className='rounded-full border-2 border-neutral-100 ' onClick={()=>setDropDown(!dropDown)}><ContactRoundIcon/></Button>
    
    { dropDown && (
        <div className='absolute right-10 mt-2 p-4 bg-white shadow-lg rounded-lg flex gap-2 '>
            {socialLinks.map((e,index)=>(
              <div className='bg-blue-500'>
                     <a href={e.href}>{e.icon}</a>
              </div>
            
            ))}
        </div>
    )

    }
    
    
    </div>
  )
}

export default Find;