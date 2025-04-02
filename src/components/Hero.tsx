import React, { useCallback, useEffect, useState } from "react";
import { CVData } from "../types";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

interface Props {
  data: CVData;
}

const Hero: React.FC<Props> = ({ data }) => {
  const [init, setInit] = useState(false);
  
  // Social media icons data
  const socialIcons = [
    { name: "LinkedIn", icon: "fab fa-linkedin", url: "https://linkedin.com" },
    { name: "GitHub", icon: "fab fa-github", url: "https://github.com" },
    { name: "Twitter", icon: "fab fa-twitter", url: "https://twitter.com" },
    { name: "Instagram", icon: "fab fa-instagram", url: "https://instagram.com" }
  ];

  // Initialize particles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log(container);
  }, []);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#1A1A2E] via-[#16213E] to-[#0F172A] text-white py-20 overflow-visible">
      {/* Particles background - extended height to overlap with WhatIDo section */}
      {init && <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: {
            color: {
              value: "transparent",
            },
          },
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
              },
            },
            color: {
              value: "#ffffff",
            },
            opacity: {
              value: 0.5,
              animation: {
                enable: true,
                speed: 1,
              },
            },
            size: {
              value: 3,
              animation: {
                enable: true,
                speed: 4,
              },
            },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
            },
          },
          retina_detect: true,
        }}
        className="absolute inset-0 h-[calc(100%+10rem)] z-0"
      />}

      {/* Background gradient blobs */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500 blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-8 z-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-6">
            <div className="animate-fade-in">
              <p className="text-blue-300 text-lg font-medium mb-2">{data.hero.welcome}</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                Hi I am <span className="text-blue-400">{data.hero.name}</span>
              </h1>
              <h2 className="text-2xl md:text-3xl text-blue-200 mb-4">{data.hero.role}</h2>
              
              {/* Social Media Icons */}
              <div className="flex space-x-4 mb-6">
                {socialIcons.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-700/50 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-white text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <p className="text-lg text-blue-100 leading-relaxed mb-6">
              {data.hero.description}
            </p>
            
            {/* CTA Button */}
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 hover:shadow-lg shadow-blue-500/20">
              More About Me
            </button>
          </div>

          {/* Right Section - Person Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Main image with border effect */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-xl backdrop-blur-sm">
                <img 
                  src="assets/profile-image.png" 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 