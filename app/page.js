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
          <img src="/logo.svg" width="30" height="30" alt="Videomatics AI Logo" />
          <h2 className="font-bold text-xl">Videomatics AI</h2>
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

          {/* Extended Section: Use Cases */}
          <section className="bg-gray-100 rounded-xl p-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Popular Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Reels & Shorts",
                  desc: "Perfect for social creators looking to boost engagement with AI-generated short videos."
                },
                {
                  title: "Marketing Videos",
                  desc: "Promote your product or service using automated video workflows and voiceovers."
                },
                {
                  title: "Educational Content",
                  desc: "Create quick explainer videos with subtitles, captions, and visuals in just minutes."
                },
                {
                  title: "Product Demos",
                  desc: "Turn text instructions into demo walkthroughs instantly."
                },
                {
                  title: "Real Estate Showcases",
                  desc: "Generate beautiful walkthroughs from photos or property scripts."
                },
                {
                  title: "Client Proposals",
                  desc: "Send video-based pitches that convert better than PDFs or decks."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Integration Section */}
          <section className="text-center space-y-10">
            <h2 className="text-3xl md:text-4xl font-bold">Seamless Integrations</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Videomatics AI works great with your favorite platforms.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="px-6 py-2 border rounded-full">YouTube</span>
              <span className="px-6 py-2 border rounded-full">Instagram</span>
              <span className="px-6 py-2 border rounded-full">TikTok</span>
              <span className="px-6 py-2 border rounded-full">Firebase</span>
              <span className="px-6 py-2 border rounded-full">Razorpay</span>
              <span className="px-6 py-2 border rounded-full">Remotion</span>
              <span className="px-6 py-2 border rounded-full">AssemblyAI</span>
              <span className="px-6 py-2 border rounded-full">ElevenLabs</span>
              <span className="px-6 py-2 border rounded-full">Gemini AI</span>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="bg-gray-50 p-10 rounded-xl space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="space-y-4 max-w-3xl mx-auto">
              {[{
                q: "Is Videomatics AI free to use?",
                a: "Yes! You can create and preview videos for free. Rendering/download credits may apply."
              },{
                q: "Do I need video editing skills?",
                a: "No. Our AI handles everything from voiceovers to visuals. You just give the idea."
              },{
                q: "Can I download videos?",
                a: "Yes, rendered videos can be downloaded or shared directly."
              }].map((item, i) => (
                <div key={i} className="bg-white p-5 rounded-lg border">
                  <h4 className="font-semibold text-blue-700 mb-1">Q: {item.q}</h4>
                  <p className="text-gray-600">A: {item.a}</p>
                </div>
              ))}
            </div>
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
            <p>© 2025 Videomatics AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
