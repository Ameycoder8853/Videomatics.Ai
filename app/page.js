"use client";

import { useState, useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavigate = (e, path) => {
    e.preventDefault();
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className='p-3 px-5 flex items-center justify-between shadow-md'>
        <div className='flex gap-3 items-center'>
          <img src='/logo.jpeg' width="30" height="30" alt="Videomatics AI Logo"/> 
          <h2 className='font-bold text-xl'>Videomatics AI</h2>
        </div>
        <div className='flex gap-3 items-center'>
          <button 
            onClick={(e) => handleNavigate(e, '/dashboard')}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Dashboard
          </button>
          <UserButton/>
        </div>
      </div>
      
      {/* Main Content */}
      <main className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      } transition-all duration-1000`}>
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Create Stunning Videos with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"> AI Magic</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your ideas into professional videos in minutes using cutting-edge AI technology.
              Your Own Video Generator AI
            </p>
            <div className="space-x-4">
              <button
                onClick={(e) => handleNavigate(e, '/dashboard')}
                className="transform hover:scale-105 transition-transform duration-200 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-lg px-8 py-4"
              >
                Start Creating Now
              </button>
              <button
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
                className="transform hover:scale-105 transition-transform duration-200 text-blue-700 bg-blue-100 hover:bg-blue-200 font-medium rounded-full text-lg px-8 py-4"
              >
                Learn More
              </button>
            </div>
          </div>
          
          {/* SEO Optimization Section */}
          <div className="hidden">
            <p>
              Video Generator AI, AI video maker, automated video creation, AI-powered video editing, AI content creation, video production AI, video automation software, text-to-video AI, AI video editor, smart video generator, AI-based video platform, AI-driven video content, automatic video generation, AI video synthesis, AI-enhanced video creation, AI-generated video clips, fast AI video maker, video editing with AI, machine learning video generator, deep learning video synthesis, AI video tools, video content automation, AI-powered storytelling, intelligent video creation, high-quality AI video, video rendering AI, automated video software, AI video solutions, AI-driven media production, AI promotional videos, AI social media videos, video marketing automation, AI-powered video marketing, AI video generation tool, artificial intelligence video creation, AI-powered content generation, AI-generated video templates, deepfake AI video, AI-enhanced animation, smart AI video production, AI-generated promotional content, AI-powered explainer videos, AI-driven content marketing, AI animation tools, automated video editing software, AI-enhanced storytelling, AI-generated business videos, AI-powered branding videos, corporate video AI, AI-generated ad videos, video AI assistant, AI-driven film production, AI-powered documentary creation, AI-generated cinematic videos, AI-powered professional video production, AI motion graphics, AI-enhanced video presentations, and more.
            </p>
          </div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>© 2024 Videomatic AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;