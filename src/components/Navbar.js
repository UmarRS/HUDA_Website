import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <IconContext.Provider>
      <header className="flex items-center justify-between h-auto px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-950 m-3">
        <div className="flex items-center">
          <Link
            className="flex items-center gap-2 text-xl font-semibold text-black hover:text-gray-700 no-underline"
            href="#"
            to="/"
          >
            <img
              className="w-auto h-20"
              src="http://www.hudaclinic.org/images/logo.png"
              alt="Logo"
            />
            <span className="sr-only">Acme Health</span>
          </Link>
          <nav className="hidden ml-10 space-x-4 md:flex md:items-center">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg font-medium text-black hover:text-gray-700 no-underline">
                About Us <i className=" pl-1 fas fa-chevron-down"></i>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="bg-white"
              >
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    href="#"
                    to="/Announcements"
                  >
                    Announcements <i className=" pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    href="#"
                    to="/ourstory"
                  >
                    Our Story <i className=" pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    href="#"
                    to="/Volunteer"
                  >
                    Volunteers <i className=" pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    href="#"
                    to="/Partners"
                  >
                    Partners <i className=" pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    href="#"
                    to="/Contact"
                  >
                    Contact Us <i className=" pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              className="text-lg font-medium text-black hover:text-gray-700 no-underline"
              href="#"
              to="/healthservices"
            >
              Health Services
            </Link>
            <Link
              className="text-lg font-medium text-black hover:text-gray-700 no-underline"
              href="#"
              to="/Donate"
            >
              Donate
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden border-r border-gray-200 pr-4 md:block dark:border-gray-800">
            <Link
              className="text-lg font-medium text-black hover:text-gray-700 no-underline"
              href="#"
            >
              Patient Portal
            </Link>
          </div>
          <Link
            className="inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-black border-2 border-black rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 no-underline"
            href="#"
          >
            New Patient
          </Link>
        </div>
      </header>
    </IconContext.Provider>
  );
}

export default Navbar;
