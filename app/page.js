"use client";

import { useState, useEffect } from 'react';
import { UserButton } from '@clerk/nextjs';
import Head from 'next/head';

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
    <>
      <Head>
        <title>Videomatics AI - AI Video Generator Platform</title>
        <meta name="description" content="Create stunning videos with Videomatics AI – your all-in-one AI-powered video generator and editor. Perfect for YouTube, Instagram, Reels, TikTok, business and educational videos." />
        <meta name="keywords" content="AI Video Generator, Video Generator AI, AI Video Editing, Automated Video Creation, AI-Powered Video Editor, AI Video Production, Smart Video Editing, AI-Based Video Tools, AI Video Generator Online, Free AI Video Generator, Videomatics AI, Videomatics AI Platform, Videomatics AI Video Generator, Videomatics AI Video Editing, Videomatics AI Video Templates, Videomatics AI Video Automation, Videomatics AI for Social Media, Videomatics AI YouTube Shorts Creator, Videomatics AI Instagram Reels Maker, Videomatics AI TikTok Video Generator, Videomatics AI Educational Videos, Videomatics AI Product Videos, Videomatics AI Promotional Videos, Videomatics AI Explainer Videos, Videomatics AI Real Estate Video Tool, Videomatics AI Marketing Video Creator, Videomatics AI SaaS, Videomatics AI Video Editor Online, Videomatics AI Powered Content Creation, Videomatics AI for Content Creators, Videomatics AI Shorts Automation, Videomatics AI for Influencers, Videomatics AI for Agencies, AI Video Generator for Freelancers, AI Video SaaS Builder, AI Video Generator for Businesses, AI Video for Marketing Automation, Personalized AI Video Creator, Text to Video AI Generator, Script to Video AI Generator, AI for Social Video Automation, Short Video AI Tool, Best AI Tool for Video Content, AI Tools for YouTube Creators, AI Shorts Generator SaaS, AI Tool for Reels & Shorts, Videomatics AI Shorts Editor, Videomatics AI Caption Generator, Videomatics AI Voiceover Generator, Videomatics AI Image-to-Video Tool, Videomatics AI Auto Script Generator, Videomatics AI One-Click Video Creation, Create AI Videos Without Editing Skills, AI Video Maker for Startups, AI Video Marketing SaaS, AI Video Generation for Coaches, Videomatics AI Monetization Tool, Videomatics AI for E-Commerce, AI Video Creation for Brands, AI Tools for Video Creators, AI Social Video Builder, Videomatics AI Video Insights, Videomatics AI Performance Analytics, Videomatics AI Cloud Video Rendering, AI Video Generator with Firebase, Next.js AI Video Generator SaaS, Videomatics AI Powered by Remotion, Videomatics AI Google Cloud Video Renderer, Videomatics AI Shorts Scheduler, AI Video Ads, AI Short Video Maker, AI Talking Head Video Generator, AI Video Caption Generator, AI Subtitle Generator, AI Webinar Video Generator, AI Face Swap Video Maker, AI Avatar Video Creator, AI Video Optimization" />
      </Head>

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
    </>
  );
};

export default LandingPage;