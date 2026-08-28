"use client";
 
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
 
// Define consistent color scheme for dark background
const ACCENT_COLOR_HOVER = "text-blue-400";
const ACCENT_COLOR_TITLE = "text-blue-400";
const PRIMARY_TEXT_DARK = "text-gray-300"; // General text on dark background
const SECONDARY_TEXT_DARK = "text-gray-400"; // Description text
 
const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "CogniAssist", href: "/products/cogniassist" },
        { name: "CogniLoom", href: "/products/cogniloom" },
        { name: "CogniAura", href: "/products/cogniaura" },
      ],
      subSections: [
        {
          title: "Services",
          links: [
            { name: "AI Consulting", href: "/services/ai-consulting" },
            { name: "AI Development", href: "/services/ai-development" },
            { name: "Cloud & DevOps", href: "/services/cloud-devops" },
            { name: "Data Engineering", href: "/services/data-engineering" },
            { name: "Intelligent Automation", href: "/services/intelligent-automation" },
          ],
        },
      ],
    },
    {
      title: "Solutions",
      links: [
        { name: "CogniVibe", href: "/solutions/cognivibe" },
        { name: "CogniTest", href: "/solutions/cognitest" },
        { name: "CogniOps", href: "/solutions/cogniops" },
      ],
      subSections: [
        {
          title: "Industries",
          links: [
            { name: "Banking & Finance", href: "/industries/banking" },
            { name: "Healthcare", href: "/industries/healthcare" },
            { name: "Retail & E-commerce", href: "/industries/retail" },
            { name: "Insurance", href: "/industries/insurance" },
            { name: "Manufacturing", href: "/industries/manufacturing" },
            { name: "Telecommunications", href: "/industries/telecom" },
          ],
        },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Leadership", href: "/about#leadership" },
        { name: "Life at Cogniwide", href: "/about/life-at-cogniwide" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
      ],
    },
  ];
 
  return (
    <footer className="bg-gradient-to-br from-gray-700 via-gray-700 to-gray-700 text-white border-t-2 border-blue-600">
      <div className="w-full px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <Image
                  src="/logo-dark.png"
                  alt="Cogniwide"
                  width={150}
                  height={40}
                  className="h-10 w-auto mb-2 filter brightness-125"
                />
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"></div>
              </div>
              <p
                className={`text-xs leading-relaxed mb-4 ${SECONDARY_TEXT_DARK}`}
              >
                AI-based IT products and services company focused on Digital
                Transformation using AI, RPA, Data Analytics, and Blockchain.
              </p>
 
              {/* Social Media Links */}
              <div className="flex space-x-2 mb-4">
                <a
                  href="https://www.linkedin.com/company/cogniwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/cogniwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/cogniwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
 
              {/* Association Logos - ISO Certification */}
              <div className="flex gap-4 items-start">
                <Image
                  src="/images/iso.png"
                  alt="ISO 27001 Certified"
                  width={80}
                  height={80}
                  className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300 rounded-lg object-contain"
                />
              </div>
            </motion.div>
          </div>
 
          {/* Footer Links - Products */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Title color and underline adjustment */}
            <h3
              className={`text-lg font-bold ${ACCENT_COLOR_TITLE} mb-5 pb-2 relative inline-block`}
            >
              Products
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h3>
            <ul className="space-y-3 mb-8">
              {footerSections[0].links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    // Restored original alignment classes (hover:translate-x-1) and applied dark theme colors
                    className={`text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block group ${PRIMARY_TEXT_DARK} hover:${ACCENT_COLOR_HOVER}`}
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <h4
              className={`text-base font-bold ${ACCENT_COLOR_TITLE} mb-4 pb-1 relative inline-block`}
            >
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {footerSections[0].subSections?.[0]?.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    // Restored original alignment classes (hover:translate-x-1) and applied dark theme colors
                    className={`text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block group ${PRIMARY_TEXT_DARK} hover:${ACCENT_COLOR_HOVER}`}
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
 
          {/* Footer Links - Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3
              className={`text-lg font-bold ${ACCENT_COLOR_TITLE} mb-5 pb-2 relative inline-block`}
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h3>
            <ul className="space-y-3 mb-8">
              {footerSections[1].links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    // Restored original alignment classes (hover:translate-x-1) and applied dark theme colors
                    className={`text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block group ${PRIMARY_TEXT_DARK} hover:${ACCENT_COLOR_HOVER}`}
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
            <h4
              className={`text-base font-bold ${ACCENT_COLOR_TITLE} mb-4 pb-1 relative inline-block`}
            >
              Industries
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></span>
            </h4>
            <ul className="space-y-3">
              {footerSections[1].subSections?.[0]?.links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    // Restored original alignment classes (hover:translate-x-1) and applied dark theme colors
                    className={`text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block group ${PRIMARY_TEXT_DARK} hover:${ACCENT_COLOR_HOVER}`}
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
 
          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3
              className={`text-lg font-bold ${ACCENT_COLOR_TITLE} mb-5 pb-2 relative inline-block`}
            >
              Company
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h3>
            <ul className="space-y-3">
              {footerSections[2].links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    // Restored original alignment classes (hover:translate-x-1) and applied dark theme colors
                    className={`text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block group ${PRIMARY_TEXT_DARK} hover:${ACCENT_COLOR_HOVER}`}
                  >
                    <span className="group-hover:underline">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
 
          {/* Our Branches */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h3
              className={`text-lg font-bold ${ACCENT_COLOR_TITLE} mb-5 pb-2 relative inline-block`}
            >
              Our Global Presence
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></span>
            </h3>
 
            <div className="text-xs space-y-5">
              <div>
                <div className="flex items-center gap-1 mb-3">
                  <Image 
                    src="/images/flag/india_640.png" 
                    alt="India Flag" 
                    width={24}
                    height={16}
                    className="w-6 h-4 object-cover rounded shadow-sm"
                  />
                  <h1 className="text-blue-300 font-bold">India</h1>
                </div>
                <div className="ml-4 space-y-6">
                  {[
                    [
                      "Corporate Head Quarters",
                      "Cogniwide Technologies Private Limited, 3rd Floor, Alpha City, SSPDL Building, Rajiv Gandhi Salai, Navalur, Chennai - 603103",
                    ],
                    [
                      "Registered Office",
                      "Cogniwide Technologies Private Limited, 1st Floor, SPD Plaza, 52, Jyoti Niwas College Rd, Koramangala, Bengaluru - 560034",
                    ],
                    [
                      "Madurai ODC",
                      "Cogniwide Technologies Private Limited, No.15 4th floor Gokale Road, Chinna Chokkikulam, Madurai - 625014",
                    ],
                  ].map(([city, addr]) => (
                    <div key={city}>
                      <div className="flex items-center gap-2 text-blue-400 font-semibold">
                        <LocationIcon /> {city}
                      </div>
                      <p className={`${SECONDARY_TEXT_DARK} ml-6`}>{addr}</p>
                    </div>
                  ))}
                </div>
              </div>
 
              <div>
                <div className="flex items-center gap-1 mb-3">
                  <Image 
                    src="/images/flag/united_arab_emirates_640.png" 
                    alt="UAE Flag" 
                    width={24}
                    height={16}
                    className="w-6 h-4 object-cover rounded shadow-sm"
                  />
                  <h4 className="text-blue-300 font-bold">UAE</h4>
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold">
                    <LocationIcon /> MENA Regional Head Quarters
                  </div>
                  <p className={`${SECONDARY_TEXT_DARK} ml-6`}>
                    Cogniwide Technologies Private Limited, FZE, P.O. Box: 6009,
                    DTEC, DSOA, Dubai, UAE
                  </p>
                </div>
              </div>
 
              <div>
                <div className="flex items-center gap-1 mb-3">
                  <Image 
                    src="/images/flag/united_kingdom_640.png" 
                    alt="UK Flag" 
                    width={24}
                    height={16}
                    className="w-6 h-4 object-cover rounded shadow-sm"
                  />
                  <h4 className="text-blue-300 font-bold">UK</h4>
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-2 text-blue-400 font-semibold">
                    <LocationIcon /> London
                  </div>
                  <p className={`${SECONDARY_TEXT_DARK} ml-6`}>
                    Cogniwide Technologies Private Limited, 14 , 213 Barking
                    Road, London, England, E16 4HH
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
 
const LocationIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
      clipRule="evenodd"
    />
  </svg>
);
 
export default Footer;