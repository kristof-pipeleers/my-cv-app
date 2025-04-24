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

  // Helper function to generate contact URLs
  const getContactUrl = (type: string, value: string) => {
    switch (type) {
      case 'email':
        return `mailto:${value}`;
      case 'phone':
        return `tel:${value.replace(/\s/g, '')}`;
      case 'address':
        return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(value)}`;
      case 'birthday':
        return '#'; // Birthday doesn't need a URL
      default:
        return value;
    }
  };

  // Helper function to get contact value
  const getContactValue = (type: string) => {
    switch (type) {
      case 'email':
        return data.contact.email;
      case 'phone':
        return data.contact.phone;
      case 'address':
        return data.contact.address;
      case 'birthday':
        return data.contact.birthday;
      default:
        return '';
    }
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-gray-50 via-gray-100 via-gray-200 to-gray-100 
      dark:from-[#1A1A2E] dark:via-[#16213E] dark:via-[#0F172A] dark:to-[#16213E] 
      text-gray-900 dark:text-white py-20 overflow-visible transition-colors duration-300">
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
              value: ["#4B5563", "#6B7280"],
              animation: {
                enable: false,
              },
            },
            opacity: {
              value: { min: 0.3, max: 0.7 },
              animation: {
                enable: true,
                speed: 1,
              },
            },
            size: {
              value: 2,
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
              color: "#4B5563",
              opacity: 0.3,
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
        className="absolute inset-0 h-[calc(100%+20rem)] z-0"
      />}

      {/* Background gradient blobs - adjusted for light theme */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10 z-0">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400 dark:bg-blue-400 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-indigo-500 dark:bg-indigo-500 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-purple-500 dark:bg-purple-500 blur-3xl opacity-20"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-3 sm:px-4 md:px-8 z-20">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Section - Text Content */}
          <div className="space-y-4 sm:space-y-6">
            <div className="animate-fade-in">
              <p className="text-blue-600 dark:text-blue-300 text-base sm:text-lg font-medium mb-2">
                {data.hero.welcome}
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900 dark:text-white">
                Hi I am <span className="text-blue-600 dark:text-blue-400">{data.hero.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl text-blue-600 dark:text-blue-200 mb-4">
                {data.hero.role}
              </h2>
              
              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                {data.socialIcons.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-blue-700/50 hover:bg-blue-600 p-2 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                    aria-label={social.name}
                  >
                    <i className={`${social.icon} text-white text-lg sm:text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-gray-700 dark:text-blue-100 leading-relaxed mb-6 sm:mb-8">
              {data.hero.description}
            </p>
            
            {/* Contact Block */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                CONTACT
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {data.contactIcons.map((contact, index) => (
                  <a 
                    key={index}
                    href={getContactUrl(contact.type, getContactValue(contact.type))}
                    target={contact.type === 'address' ? '_blank' : undefined}
                    rel={contact.type === 'address' ? 'noopener noreferrer' : undefined}
                    className="flex items-center group hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                  >
                    <div className="bg-blue-100 dark:bg-blue-700/50 group-hover:bg-blue-200 dark:group-hover:bg-blue-600 p-1.5 sm:p-2 rounded-full transition-all duration-300 mr-2 sm:mr-3">
                      <i className={`${contact.icon} text-blue-600 dark:text-white text-base sm:text-lg w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center`}></i>
                    </div>
                    <span className="font-mono text-xs sm:text-sm md:text-base text-gray-700 dark:text-blue-100 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 break-all sm:break-normal">
                      {getContactValue(contact.type)}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Person Image */}
          <div className="flex justify-center md:justify-end mt-6 sm:mt-0">
            <div className="relative">
              {/* Main image with border effect */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-4 border-blue-400/30 shadow-xl backdrop-blur-sm">
                <img 
                  src={`${process.env.PUBLIC_URL}/assets/profile-image.png`}
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