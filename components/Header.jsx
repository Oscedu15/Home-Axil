"use client";

import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNavigation from "./MobileNavigation";
import { usePathname } from "next/navigation";

export default function Header() {

  const [header, setHeader] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });

    //remove Events
    return () => window.removeEventListener('scroll', scrollYPos);
  });
  console.log(header)
  return (
    <header className={`${header ? 'py-4 bg-tertiary shadow-lg dark:bg-accent' : 'py-4 dark:bg-transparent'} sticky top-0 z-30 transition-all ${pathname === '/' && 'bg-[#fff]'}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Logo/>
          <div className="flex items-center gap-x-6">
            {/* Nav Section */}
            <Nav containerStyles='hidden xl:flex gap-x-8 items-center'
            linkStyles='relative hover:text-primary transition-all duration-300'
            underlineStyles='absolute left-0 top-full h-[2px] bg-primary w-full'/>
            {/* Theme Toggler */}
            <ThemeToggler />

            {/* Mobile Navigation */}
            <div className="xl:hidden">
              <MobileNavigation/>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
