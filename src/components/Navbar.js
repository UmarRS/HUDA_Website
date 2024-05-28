import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <IconContext.Provider>
      <header className="flex items-center justify-between h-auto px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-950 m-3">
        <div className="flex items-center flex-grow">
          <Link
            className="flex items-center gap-2 text-xl font-semibold text-black hover:text-gray-700 no-underline"
            to="/"
          >
            <img
              className="w-auto h-20"
              src="http://www.hudaclinic.org/images/logo.png"
              alt="Logo"
            />
          </Link>
          {/* Fullscreen Menu Overlay */}
          <button
            className="md:hidden ml-10"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>
          <div
            className={`fixed inset-0 bg-black bg-opacity-30 z-50 flex justify-center items-center ${
              isOpen ? "flex" : "hidden"
            }`}
          >
            <button
              className="absolute top-8 right-8 text-white text-3xl"
              onClick={() => setIsOpen(false)}
            >
              &times; {/* Close Icon */}
            </button>
            <nav className="flex flex-col items-start space-y-6">
              {/* Mobile Navigation Links */}
              <Link
                className="text-white text-2xl no-underline hover:no-underline"
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                className="text-white text-2xl no-underline hover:no-underline"
                to="/Announcements"
                onClick={() => setIsOpen(false)}
              >
                Announcements
              </Link>
              <Link
                className="text-white text-2xl no-underline hover:no-underline"
                to="/ourstory"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </Link>
              <Link
                className="text-white text-2xl no-underline hover:no-underline"
                to="/Volunteer"
                onClick={() => setIsOpen(false)}
              >
                Volunteers
              </Link>
              <Link
                className="text-white text-2xl no-underline hover:no-underline"
                to="/Partners"
                onClick={() => setIsOpen(false)}
              >
                Partners
              </Link>
              <Link
                className="text-white text-2xl no-underline hover:no-underline"
                to="/Contact"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                className="text-white text-2xl no-underline hover:no-underline"
                to="/healthservices"
                onClick={() => setIsOpen(false)}
              >
                Health Services
              </Link>
              <Link
                className="text-white text-2xl no-underline hover:no-underline"
                to="/Donate"
                onClick={() => setIsOpen(false)}
              >
                Donate
              </Link>
            </nav>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4 items-center ml-10">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-lg font-medium text-black hover:text-gray-700 no-underline">
                About Us <i className="pl-1 fas fa-chevron-down"></i>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={8}
                className="bg-white"
              >
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    to="/Announcements"
                  >
                    Announcements <i className="pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    to="/ourstory"
                  >
                    Our Story <i className="pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    to="/Volunteer"
                  >
                    Volunteers <i className="pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    to="/Partners"
                  >
                    Partners <i className="pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    className="flex items-center justify-between w-full text-lg text-black hover:text-gray-700 no-underline"
                    to="/Contact"
                  >
                    Contact Us <i className="pl-3 fas fa-chevron-right"></i>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              className="text-lg font-medium text-black hover:text-gray-700 no-underline"
              to="/healthservices"
            >
              Health Services
            </Link>
            <Link
              className="text-lg font-medium text-black hover:text-gray-700 no-underline"
              to="/Donate"
            >
              Donate
            </Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:block border-r border-gray-200 pr-4 dark:border-gray-800">
            <Link
              className="text-lg font-medium text-black hover:text-gray-700 no-underline"
              to="/patientportal"
            >
              Patient Portal
            </Link>
          </div>
          <Link
            className="inline-flex items-center justify-center p-1 text-lg font-medium text-black border-2 border-black rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 no-underline"
            to="/newpatient"
          >
            New Patients
          </Link>
        </div>
      </header>
    </IconContext.Provider>
  );
}

export default Navbar;
