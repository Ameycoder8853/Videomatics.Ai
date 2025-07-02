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
      <div className="p-3 px-5 flex items-center justify-between shadow-md bg-white z-50 relative">
        <div className="flex gap-3 items-center">
          <img src="/logo.svg" width="30" height="30" alt="Videomatic AI Logo" />
          <h2 className="font-bold text-xl">Videomatic AI</h2>
        </div>
        <div className="flex gap-3 items-center">
          <button
            onClick={(e) => handleNavigate(e, "/dashboard")}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        <div className="space-y-16">
          {/* Hero Content */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Create Stunning Videos with
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {" "}
                AI Magic
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your ideas into professional videos in minutes using cutting-edge AI technology.
              <br />
              <br />
              Your Own Video Generator AI
            </p>
            <div className="space-x-4">
              <button
                onClick={(e) => handleNavigate(e, "/dashboard")}
                className="transform hover:scale-105 transition-transform duration-200 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-8 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Start Creating Now
              </button>
              <button
                onClick={() =>
                  document.getElementById("video-tutorial")?.scrollIntoView({ behavior: "smooth" })
                }
                className="transform hover:scale-105 transition-transform duration-200 text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-8 py-4 text-center m-5"
              >
                Watch Tutorial
              </button>
            </div>
          </div>

          {/* Tutorial Video Section */}
          <div id="video-tutorial" className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How Videomatic AI Works</h2>
            <p className="text-gray-600 mb-4">Watch this short video to see how easily you can create AI videos.</p>
            <div className="flex justify-center">
              <div className="relative w-full md:w-[80%] lg:w-[70%] rounded-xl overflow-hidden shadow-xl">
                <video
                  controls
                  className="w-full h-auto rounded-xl border"
                  poster="/video-thumbnail.png" // Optional thumbnail image
                >
                  <source src="https://cdn.pixabay.com/video/2023/04/19/160294-823678247_large.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
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
