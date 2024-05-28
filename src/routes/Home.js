import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import primary from "../assets/img/primary.jpg";
import mental from "../assets/img/mental.jpg";
import dental from "../assets/img/dental.jpg";
import vision from "../assets/img/vision.JPG";
import specialty from "../assets/img/specialty.jpg";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />

      <div className="bg-blue-900 text-white p-8 text-center">
        <h4 className="text-3xl font-bold mb-2">Have Health Concerns?</h4>
        <p className="text-xl">
          We're helping the Uninsured and Underinsured of Metro Detroit.
        </p>
      </div>

      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[primary, mental, dental, vision, specialty].map((img, index) => (
            <Link to={`${["healthservices"]}`}>
              <div className="max-w-sm cursor-pointer">
                <img
                  src={img}
                  alt="Health Service"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white text-center">
                  <h6 className="text-lg font-semibold">
                    {
                      [
                        "Primary Care",
                        "Mental Health",
                        "Dental Care",
                        "Vision Care",
                        "Specialty Care",
                      ][index]
                    }
                  </h6>
                  <p className="text-blue-500 hover:text-blue-700">Read More</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-white p-8">
        <h2 className="text-3xl text-gray-900 font-bold text-center">
          HUDA, A Free Clinic in Metro Detroit
        </h2>
        <p className="text-gray-800 text-lg mt-4">
          We provide FREE Primary Care, Dental Care, Mental Health Services,
          Vision Care, and Specialty Care for those who are uninsured and
          underinsured. HUDA Clinic is a health facility that offers free
          healthcare services to the public, which means no copays or fees. We
          have expanded from our humble beginnings in the Muslim Community
          Center in 2004 through the help of dedicated volunteers, partnerships
          with local organizations and hospitals, and generous donations.
        </p>
      </div>

      <div className="bg-gray-100 p-8">
        <h2 className="text-3xl text-gray-900 font-bold text-center">
          Community Outreach & Health Education
        </h2>
        <p className="text-gray-800 text-lg mt-4">
          At the core of our mission is wellness; we seek to provide medical
          services not just to treat your symptoms but to address core problems
          with our patients to create a healthier community. We focus on
          educating our clients on important lifestyle interventions, vital
          health and nutritional information, while working with the community
          through health fairs and local events which allows us to bring this
          information to more people.
        </p>
      </div>

      <div className="container mx-auto my-6">
        <iframe
          className="w-full h-96"
          src="https://www.youtube.com/embed/5jJ936s0g9I"
          title="YouTube video"
          allowFullScreen
        ></iframe>
      </div>

      <div className="bg-blue-900 text-white p-8 text-center">
        <p className="text-xl">13240 Woodrow Wilson St. Detroit, MI 48238</p>
      </div>
    </>
  );
}
