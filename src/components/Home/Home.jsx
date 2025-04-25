import React from "react";
import { Link } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Photo1 from "./photo-1649180543887-158357417159.jpeg";
import photo2 from "./Realtime.jpeg";
import photo3 from "./competitvecoding.jpeg";
import photo4 from "./smart-bin.png";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  AOS.init(); // Initialize AOS

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center">
      {/* Introduction Section */}
      <header className="flex flex-col items-center justify-center mt-10 animate__animated animate__fadeIn">
        <h1 className="text-5xl font-extrabold leading-tight mb-4 animate__animated animate__fadeIn animate__delay-1s">
          Hi, I am <span className="text-orange-500">Madan Gopal Jha</span>
        </h1>
        <p className="text-lg sm:text-2xl max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s">
          A passionate and results-driven{" "}
          <span className="text-orange-500">Full Stack Web Developer</span> with
          a focus on crafting dynamic, responsive web applications using the
          MERN stack. I excel at transforming complex ideas into intuitive,
          user-friendly solutions.
        </p>
        <a
          href="https://github.com/Madan2468"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold py-3 px-8 mt-10 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block animate__animated animate__fadeIn animate__delay-3s"
        >
          Explore My Work
        </a>
      </header>

      {/* Featured Projects Section */}
      <section className="mt-24 w-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-8 animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInLeft"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <img
                src={Photo1}
                alt="Project 1"
                className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-2">
                YouTube Full Backend
              </h3>
              <p>
                A complete backend solution for a YouTube-like platform,
                including user management, video handling, and authentication.
              </p>
              <a
                href="https://github.com/Madan2468/YouTube-Backend"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                View on GitHub
              </a>
              <div className="mt-4">
                <a
                  href="https://github.com/Madan2468/YouTube-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    alt="GitHub Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </div>
            </div>
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInRight"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <img
                src={photo2}
                className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-2">
                Real-Time User Tracker
              </h3>
              <p>
                A dynamic user tracking system in real-time, showcasing live
                data updates and tracking functionalities.
              </p>
              <a
                href="https://github.com/Madan2468/RealTime-user-Tracker-"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                View on GitHub
              </a>
              <div className="mt-4">
                <a
                  href="https://github.com/Madan2468/RealTime-user-Tracker-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    alt="GitHub Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </div>
            </div>
            {/* New Competitive Coding Leaderboard Project */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={photo3}
                alt="Competitive Coding Leaderboard"
                className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-2">
                Competitive Coding Leaderboard
              </h3>
              <p>
                Track your progress across multiple platforms in one place,
                compare your rankings, and stay motivated to improve.
              </p>
              <div className="text-lg font-semibold text-green-500 mt-2">
                200+ Unique Visitors
              </div>
              <a
                href="https://competitive-coding-leaderboard.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                Visit Website
              </a>
              <div className="mt-4">
                <a
                  href="https://github.com/Madan2468/Competitve-Coding-leaderboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    alt="GitHub Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </div>
            </div>
            {/* New Next-Generation Smart Waste Bins Project */}
            <div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={photo4}
                alt="Next-Generation Smart Waste Bins"
                className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-semibold mb-2">
                NEXT-GENERATION SMART WASTE BINS: IoT-BASED WASTE MONITORING AND
                COLLECTION OPTIMIZATION
              </h3>
              <p>
                This project addresses urban waste management challenges like
                overflowing bins and high operational costs using IoT principles
                and optimization algorithms.
              </p>
              <a
                href="https://next-generation-smart-waste-bins-frontend.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-400 mt-4 inline-block"
              >
                Visit Website
              </a>
              <div className="mt-4">
                <a
                  href="https://github.com/Madan2468/NEXT-GENERATION-SMART-WASTE-BINS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <img
                    src="https://avatars.githubusercontent.com/u/9919?v=4"
                    alt="GitHub Logo"
                    className="w-8 h-8 rounded-full"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mt-24 w-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                Full Stack Developer Intern
              </h3>
              <p className="text-orange-400">AdTask | Feb 2025 - Mar 2025</p>
              <p className="mt-4">
                Worked as a Full Stack Developer Intern, where I built
                responsive, pixel-perfect UIs from Figma designs with smooth
                animations and ensured compatibility across all screen sizes. I
                integrated APIs with robust response handling, managed dynamic
                forms, and optimized performance through efficient rendering
                techniques, lazy loading, and clean code practices. I
                collaborated closely with designers and developers to deliver
                seamless user experiences and maintain design consistency.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                Software Developer Intern
              </h3>
              <p className="text-orange-400">Invoir | March 2024 - July 2024</p>
              <p className="mt-4">
                Worked as a Software Developer Intern, contributing to web
                development projects, enhancing user experiences, and
                collaborating with cross-functional teams to deliver impactful
                solutions.
              </p>
            </motion.div>

            <motion.div
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-2">
                Cinematography Head
              </h3>
              <p className="text-orange-400">CICE | August 2024 - Present</p>
              <p className="mt-4">
                Leading the cinematography team, capturing and creating visual
                content that tells compelling stories, contributing to various
                creative projects at the Creativity and Innovation Cell in
                Electronics.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* View My Resume Section */}
      <section className="mt-24 w-full px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2
            className="text-4xl font-bold mb-8 animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            View My Resume
          </h2>
          <a
            href="https://drive.google.com/file/d/1v6rBxRN9S6wSepuU2QJhx6tPmH0npakO/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold py-3 px-8 mt-10 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block"
          >
            View Resume
          </a>
        </div>
      </section>

      {/* Profile Visit Section */}
      <section className="mt-24 w-full px-4 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/1600x900/?technology,code")',
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg">
          <h2
            className="text-4xl font-bold mb-8 animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Profile Visits
          </h2>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__zoomIn"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <p className="text-3xl font-bold mb-4">Profile Visits: 1234</p>
            <p className="text-lg">
              Track the number of visits to my profile. Thank you for your
              interest!
            </p>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="mt-24 w-full px-4 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://source.unsplash.com/1600x900/?feedback,comments")',
          }}
        ></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg">
          <h2
            className="text-4xl font-bold mb-8 animate__animated animate__fadeIn"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Feedback
          </h2>
          <div
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate__animated animate__fadeInUp"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="text-lg mb-4">
              I value your feedback! Please drop me a line to share your
              thoughts or suggestions.
            </p>
            <a
              href="mailto:madanjha2468@gmail.com"
              className="bg-orange-600 hover:bg-orange-500 text-white text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105 inline-block animate__animated animate__pulse"
              data-aos="pulse"
              data-aos-duration="1000"
            >
              Send Feedback
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
