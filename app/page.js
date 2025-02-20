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
        AI Video Generator, Video Generator AI, AI Video Editing, Automated Video Creation, AI-Powered Video Editor, AI Video Production, Smart Video Editing, AI-Based Video Tools, AI Video Generator Online, Free AI Video Generator, Videomatics AI, Best AI Video Software, AI Video Creation Platform, Video Automation Tool, AI-Generated Videos, Machine Learning Video Generator, Video Editing with AI, AI-Powered Video Maker, AI Video Processing, AI Animation Generator, AI Video Effects, AI Short Video Maker, AI Video Marketing, AI Video Content Creator, AI Video Enhancer, AI Video Studio, AI Video Template, AI-Powered Filmmaking, Automated Video Editing, Smart Video Creation, AI Video Ads, AI Video Generator for YouTube, AI Video Generator for Instagram, AI Social Media Video Generator, AI Promotional Video Maker, AI Corporate Video Generator, AI Training Video Generator, AI Educational Video Maker, AI Real Estate Video Generator, AI Product Demo Generator, AI Explainer Video Generator, AI Sales Video Creator, AI Advertisement Video Generator, AI Video Caption Generator, AI Subtitle Generator, AI Music Video Creator, AI Video Intro Generator, AI Outro Generator, AI Slideshow Generator, AI Video Montages, AI Stock Footage Video Maker, AI YouTube Video Editor, AI Social Media Post Generator, AI TikTok Video Generator, AI Reels Video Generator, AI LinkedIn Video Creator, AI Podcast Video Generator, AI Webinar Video Generator, AI Event Video Creator, AI Virtual Tour Creator, AI Video Background Remover, AI Video Object Removal, AI Face Swap Video Maker, AI Avatar Video Creator, AI Talking Head Video Generator, AI Animation Video Maker, AI Cartoon Video Generator, AI AI-generated Stock Footage, AI Video Editing Software, AI Video Generator SaaS, AI Business Video Maker, AI Marketing Video Automation, AI AI-driven Video Creator, AI AI-powered Storytelling, AI AI-powered Documentary Maker, AI AI-based Video Analytics, AI AI-powered Video Optimization, AI AI-powered Video Research, AI AI-powered Video Insights, AI AI-powered Video Performance Tracking.
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