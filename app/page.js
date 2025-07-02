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
      <div className='p-3 px-5 flex items-center justify-between shadow-md bg-white z-50 relative'>
        <div className='flex gap-3 items-center'>
          <img src='/logo.svg' width="30" height="30" alt="Videomatic AI Logo" />
          <h2 className='font-bold text-xl'>Videomatic AI</h2>
        </div>
        <div className='flex gap-3 items-center'>
          <button
            onClick={(e) => handleNavigate(e, '/dashboard')}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Dashboard
          </button>
          <UserButton />
        </div>
      </div>

      {/* Hero Section with Tutorial Video Background */}
      <section className="relative h-[85vh] flex items-center justify-center text-center text-white overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://cdn.pixabay.com/video/2023/04/19/160294-823678247_large.mp4" // Replace with your actual tutorial
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <main className={`z-20 relative px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
              Learn How to Use
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500"> Videomatic AI</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
              Watch the video to understand how you can generate amazing AI-powered videos in minutes.
            </p>
            <div className="space-x-4">
              <button
                onClick={(e) => handleNavigate(e, '/dashboard')}
                className="transform hover:scale-105 transition-transform duration-200 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-8 py-4"
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

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="space-y-16">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {[
              { number: '100+', label: 'Active Users' },
              { number: '1000+', label: 'Videos Created' },
              { number: '99%', label: 'Satisfaction Rate' },
              { number: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="text-center hover:transform hover:scale-105 transition-transform duration-200">
                <div className="text-3xl md:text-4xl font-bold text-blue-700">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div id="features" className="scroll-mt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose Videomatic AI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'AI Script Generator', desc: 'Create compelling scripts using Gemini AI.' },
                { title: 'Voiceovers by AI', desc: 'Generate lifelike audio using ElevenLabs.' },
                { title: 'Auto Visuals', desc: 'Get dynamic images from SDXL Lightning.' }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works Section */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Upload Your Content', description: 'Add your images, videos, or text to get started' },
                { step: '02', title: 'Choose Your Style', description: 'Select from our wide range of different styles' },
                { step: '03', title: 'Generate & Download', description: 'Let AI work its magic and download your video' }
              ].map((item, index) => (
                <div key={index} className="relative p-6 hover:transform hover:scale-105 transition-transform duration-200">
                  <div className="text-6xl font-bold text-blue-100 absolute top-0 left-0">
                    {item.step}
                  </div>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="bg-blue-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[{
                quote: "Videomatic AI has transformed how we create content. It's incredibly fast and the results are amazing!",
                author: "Amey Patil",
                role: "Founder of Videomatic AI"
              },
              {
                quote: "The AI-powered features save me hours of work. This tool is a game-changer for video production.",
                author: "Person",
                role: "Director"
              },
              {
                quote: "I've never seen anything like it. The quality of videos I can create now is simply unprecedented.",
                author: "Person 2",
                role: "YouTuber"
              }].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-gray-500 text-sm">{testimonial.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Video Creation?</h2>
            <p className="text-lg mb-8">Join Videomatic AI now – it's free to get started.</p>
            <button
              onClick={(e) => handleNavigate(e, '/dashboard')}
              className="transform hover:scale-105 transition-transform duration-200 bg-white text-blue-600 hover:bg-gray-100 font-medium rounded-full text-lg px-8 py-4"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>© 2024 Videomatic AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
