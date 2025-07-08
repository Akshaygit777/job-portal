import React from 'react';
import Navbar from './shared/Navbar';
import Job from './Job';
import { FaInstagram, FaGithub, FaTwitter } from 'react-icons/fa';

const randomJobs = [1, 2, 3, 4, 5, 6, 7];

const Explore = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto my-10'>
        <h1 className='font-bold text-xl my-10'>Search results ({randomJobs.length})</h1>
        <div className='grid grid-cols-3 gap-4'>
          {randomJobs.map((item, index) => (
            <Job key={index} />
          ))}
        </div>

        <div
          className="
            my-20 p-20 bg-white rounded-lg relative
            border border-gray-900
            shadow-[0_0_15px_3px_rgba(30,30,30,0.15)]
            "
        >
          <h2 className='text-4xl font-extrabold text-center text-gray-900 mb-6'>
            About CompanyXYZ
          </h2>
          <p className='text-xl text-gray-800 leading-relaxed'>
            CompanyXYZ is a leading multinational technology company, innovating in software, hardware, and services. We aim to revolutionize industries through cutting-edge solutions that improve the lives of millions globally. Founded by visionary entrepreneurs, CompanyXYZ's mission is to drive the future of technology with integrity, collaboration, and creativity.
          </p>
          <div className='flex justify-center mt-10 space-x-8'>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='text-gray-900 hover:text-purple-500 transition'>
              <FaInstagram className='text-4xl' />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-gray-900 hover:text-purple-500 transition'>
              <FaGithub className='text-4xl' />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-900 hover:text-blue-500 transition'>
              <FaTwitter className='text-4xl' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
