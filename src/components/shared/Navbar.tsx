"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "@/components/ModeToggle";
import useHash from "@/app/hooks/useHash";

const menuList = [
  { id: 1, name: "HOME", link: "/#home",hash:"#/#home" },
  { id: 2, name: "ABOUT", link: "/#about" ,hash:"#/#about" },
  // { id: 3, name: "EDUCATION", link: "#education" },
  { id: 4, name: "SKILL", link: "/#skill",hash:"#/#skill" },
  { id: 5, name: "PROJECTS", link: "/#projects" ,hash:"#/#projects" },
  { id: 6, name: "BLOGS", link: "/#blogs" ,hash:"#/#blogs" },
  { id: 7, name: "CONTACT", link: "/#contact",hash:"#/#contact" },
];

const Navbar = () => {
  const pathname = useHash(); // Get current route
  // console.log(pathname, "pathname");

  return (
    <header className="py-4 sticky top-0 z-50 bg-white dark:bg-black shadow-md transition-colors duration-300">
      <div className="custom-container flex justify-between items-center px-4 lg:px-0">
        {/* Left Side - Logo */}
        <Link href="/" className="text-3xl font-bold text-cyan-400  " 
        
        onClick={() => {
                    window.location.hash = "#home";
                  }}>
          RAKIB
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 font-bold">
            {menuList.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  onClick={() => {
                    window.location.hash = item.link;
                  }}
                >
                  <span
                    className={`cursor-pointer transition-all duration-300 ${
                      pathname === item.hash
                        ? "text-cyan-500 dark:text-cyan-400"
                        : "text-gray-800 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <ModeToggle />
        </nav>

        {/* Right Side - Profile & Theme Toggle */}

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex gap-3">
          <Sheet>
            {/* Mobile Profile & Theme Toggle */}
            <div className=" flex gap-4">
              <ModeToggle />
            </div>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="size-5 text-black dark:text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-white dark:bg-black text-black dark:text-white">
              <SheetHeader>
                <SheetTitle className="text-lg font-semibold">
                  ROYAL KNIGHT
                </SheetTitle>
              </SheetHeader>

              {/* Mobile Menu List */}
              <ul className="mt-6 flex flex-col font-semibold gap-4">
                {menuList.map((item) => (
                  <li key={item.id}>
                    <Link href={item.link}>
                      <span
                        className={`block py-2 px-4 rounded-lg transition-all ${
                          pathname === item.link
                            ? "bg-red-500 text-white"
                            : "hover:bg-gray-200 dark:hover:bg-gray-800"
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
