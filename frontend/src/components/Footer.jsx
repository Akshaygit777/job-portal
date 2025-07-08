import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-purple-50 text-gray-700 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <h2 className="text-xl font-semibold text-purple-600">JobHunt Pro</h2>
          <p className="text-sm text-gray-500 mt-1">Your gateway to dream jobs!</p>
        </div>

        <div className="flex space-x-6 text-gray-800">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FaTwitter className="h-6 w-6" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-500 transition-colors"
          >
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} JobHunt Pro. All rights reserved.
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-4">
        <div className="flex justify-end">
          <span className="text-xs text-gray-400">
            Built by{" "}
            <span className="font-semibold text-gray-600">Akshaygit777</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
