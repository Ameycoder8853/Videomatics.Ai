"use client";

import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";

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
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="p-3 px-5 flex items-center justify-between shadow-md bg-white sticky top-0 z-50">
        <div className="flex gap-3 items-center">
          <img src="/logo.svg" width="30" height="30" alt="Videomatic AI Logo" />
          <h2 className="font-bold text-xl">Videomatic AI</h2>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={(e) => handleNavigate(e, "/dashboard")}
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-sm px-5 py-2.5"
          >
            Dashboard
          </button>
          <UserButton />
        </div>
      </div>

      {/* Hero Section */}
      <main
        className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } transition-all duration-1000`}
      >
        <div className="space-y-20">
          <section className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Create Stunning Videos with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                AI Magic
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your ideas into professional videos in minutes using cutting-edge AI technology.
              <br /> <br />
              Your Own Video Generator AI
            </p>
            <div className="space-x-4">
              <button
                onClick={(e) => handleNavigate(e, "/dashboard")}
                className="hover:scale-105 transition-transform duration-200 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-full text-lg px-8 py-4"
              >
                Start Creating Now
              </button>
              <button
                onClick={() =>
                  document.getElementById("video-tutorial")?.scrollIntoView({ behavior: "smooth" })
                }
                className="hover:scale-105 transition-transform duration-200 text-blue-700 bg-blue-100 hover:bg-blue-200 font-medium rounded-full text-lg px-8 py-4"
              >
                Watch Tutorial
              </button>
            </div>
          </section>

          {/* Stats Section */}
          <section className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {[
              { number: "5000+", label: "Active Users" },
              { number: "20,000+", label: "Videos Generated" },
              { number: "99%", label: "Satisfaction Rate" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, i) => (
              <div key={i} className="text-center hover:scale-105 transition-transform duration-200">
                <div className="text-4xl font-bold text-blue-700">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </section>

          {/* Video Tutorial Section */}
          <section id="video-tutorial" className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How Videomatic AI Works</h2>
            <p className="text-gray-600 mb-4">
              Watch this short video to see how easily you can create AI videos.
            </p>
            <div className="flex justify-center">
              <div className="relative w-full md:w-[80%] lg:w-[70%] rounded-xl overflow-hidden shadow-xl">
                <video
                  controls
                  className="w-full h-auto rounded-xl border"
                  poster="/video-thumbnail.png"
                >
                  <source src="https://cdn.pixabay.com/video/2023/04/19/160294-823678247_large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features You’ll Love</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Script Generator",
                  desc: "Generate compelling video scripts instantly using Gemini AI.",
                },
                {
                  title: "Voiceovers by AI",
                  desc: "Create realistic voices with ElevenLabs voice models.",
                },
                {
                  title: "Auto Visuals",
                  desc: "Convert scripts into scenes using SDXL Lightning AI images.",
                },
                {
                  title: "Remotion Preview",
                  desc: "Preview your videos in-browser before rendering in the cloud.",
                },
                {
                  title: "Social Formats",
                  desc: "Perfect for Reels, YouTube Shorts, TikToks and more.",
                },
                {
                  title: "Cloud Render + Download",
                  desc: "Render videos via Google Cloud and download anytime.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border shadow hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works Section */}
          <section className="space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload Your Input",
                  description: "Start with your idea, product, or script.",
                },
                {
                  step: "02",
                  title: "Let AI Generate",
                  description: "Videomatic handles voice, visuals, and captions.",
                },
                {
                  step: "03",
                  title: "Render & Download",
                  description: "Preview, render in cloud, and download instantly.",
                },
              ].map((item, index) => (
                <div key={index} className="relative p-6 border rounded-xl">
                  <div className="text-5xl font-bold text-blue-100 absolute top-0 left-0">
                    {item.step}
                  </div>
                  <div className="relative z-10 pt-8">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Testimonials */}
          <section className="bg-blue-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Creators Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote: "Videomatic AI has made my content creation 10x faster. Perfect for my Instagram reels.",
                  author: "Amey Patil",
                  role: "Founder & Creator",
                },
                {
                  quote: "I use this tool daily for YouTube shorts. The voice and script quality is insane.",
                  author: "Priya K.",
                  role: "YouTuber",
                },
                {
                  quote: "My agency saves hours per video. We now scale short-form content for clients easily.",
                  author: "Rahul S.",
                  role: "Agency Owner",
                },
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create AI-Powered Videos?</h2>
            <p className="text-lg mb-8">Join Videomatic AI and transform your content game.</p>
            <button
              onClick={(e) => handleNavigate(e, "/dashboard")}
              className="bg-white text-blue-700 hover:bg-gray-100 font-medium rounded-full text-lg px-8 py-4 transition hover:scale-105"
            >
              Get Started for Free
            </button>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold mb-2">Product</h4>
              <p>AI Video Generator</p>
              <p>Templates</p>
              <p>Pricing</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Company</h4>
              <p>About</p>
              <p>Blog</p>
              <p>Contact</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Support</h4>
              <p>Help Center</p>
              <p>FAQs</p>
              <p>Discord</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Legal</h4>
              <p>Privacy Policy</p>
              <p>Terms</p>
              <p>Refunds</p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-200 text-center text-gray-600">
            <p>© 2025 Videomatic AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
