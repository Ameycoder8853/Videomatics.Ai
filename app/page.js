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
        <meta name="keywords" content="AI Video Generator, Video Generator AI, Videomatics AI, Shorts Maker, Reels Generator, Script to Video AI, Remotion, ElevenLabs, Gemini, AI SaaS, AI video automation, short video generator, social media AI tool" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <div className='p-3 px-5 flex items-center justify-between shadow-md bg-white z-50 relative'>
          <div className='flex gap-3 items-center'>
            <img src='/logo.jpeg' width="30" height="30" alt="Videomatics AI Logo" />
            <h2 className='font-bold text-xl'>Videomatics AI</h2>
          </div>
          <div className='flex gap-3 items-center'>
            <button
              onClick={(e) => handleNavigate(e, '/dashboard')}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Dashboard
            </button>
            <UserButton />
          </div>
        </div>

        {/* Hero Section with Video Background */}
        <section className="relative h-[90vh] flex items-center justify-center text-center text-white overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src="https://cdn.pixabay.com/video/2023/03/06/154095-812377402_large.mp4" // Replace with your video URL if needed
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
          <main className={`z-20 relative px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Create Stunning Videos with
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"> AI Magic</span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Transform your ideas into professional videos in minutes using cutting-edge AI technology.<br />
                Your Own Video Generator AI.
              </p>
              <div className="space-x-4">
                <button
                  onClick={(e) => handleNavigate(e, '/dashboard')}
                  className="transform hover:scale-105 transition-transform duration-200 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-lg px-8 py-4"
                >
                  Start Creating Now
                </button>
                <button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  className="transform hover:scale-105 transition-transform duration-200 text-blue-700 bg-white hover:bg-gray-100 font-medium rounded-full text-lg px-8 py-4"
                >
                  Learn More
                </button>
              </div>
            </div>
          </main>
        </section>

        {/* Features Placeholder */}
        <section id="features" className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Videomatics AI?</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              { title: "Script to Video", desc: "Write or generate scripts using Gemini AI." },
              { title: "Voiceover Automation", desc: "Realistic audio using ElevenLabs voices." },
              { title: "Auto Visuals", desc: "Auto-generate scene images with SDXL." },
              { title: "Rendered in Cloud", desc: "Remotion + GCP-based rendering." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-6 border">
                <h3 className="text-xl font-semibold text-blue-700 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-100 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
            <p>© 2024 Videomatics AI. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;
