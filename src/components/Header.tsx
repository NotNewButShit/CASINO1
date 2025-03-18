import React, { useState } from "react";
import { MoonIcon, SunIcon, MenuIcon, X } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface HeaderProps {
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

const Header = ({
  isDarkMode = false,
  onToggleTheme = () => {},
}: HeaderProps) => {
  return (
    <header className="fixed w-full bg-zinc-900 text-white z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold text-amber-500">PhilCasino</div>
          <span className="text-xs bg-amber-500 text-black px-2 py-0.5 rounded-md">
            TOP 10
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="/" className="hover:text-amber-500 transition-colors">
            Home
          </a>
          <a href="/casinos" className="hover:text-amber-500 transition-colors">
            Casinos
          </a>
          <a href="/bonuses" className="hover:text-amber-500 transition-colors">
            Bonuses
          </a>
          <a href="/reviews" className="hover:text-amber-500 transition-colors">
            Reviews
          </a>
          <a href="/about" className="hover:text-amber-500 transition-colors">
            About
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-zinc-800"
              >
                {isDarkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-zinc-800 border-zinc-700"
            >
              <DropdownMenuItem
                onClick={onToggleTheme}
                className="text-white hover:bg-zinc-700 cursor-pointer"
              >
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-zinc-800"
              >
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-zinc-900 border-zinc-800 text-white p-0"
            >
              <div className="flex flex-col h-full">
                <div className="p-4 border-b border-zinc-800 flex justify-between items-center">
                  <div className="text-xl font-bold text-amber-500">
                    PhilCasino
                  </div>
                </div>
                <nav className="flex-1 p-4">
                  <div className="flex flex-col space-y-4">
                    <a
                      href="/"
                      className="py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    >
                      Home
                    </a>
                    <a
                      href="/casinos"
                      className="py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    >
                      Casinos
                    </a>
                    <a
                      href="/bonuses"
                      className="py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    >
                      Bonuses
                    </a>
                    <a
                      href="/reviews"
                      className="py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    >
                      Reviews
                    </a>
                    <a
                      href="/about"
                      className="py-2 px-4 hover:bg-zinc-800 rounded-md transition-colors"
                    >
                      About
                    </a>
                  </div>
                </nav>
                <div className="p-4 border-t border-zinc-800">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black">
                    Join Now
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <Button className="hidden md:flex bg-amber-500 hover:bg-amber-600 text-black">
            Join Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
