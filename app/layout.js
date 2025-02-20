import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Outfit } from "next/font/google";
import { Toaster } from "../components/ui/sonner";
import Head from "next/head";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Videomatics AI - AI Video Generator for Stunning Content",
  description: "Videomatics AI is the best AI-powered video generator that helps you create high-quality videos effortlessly for YouTube, Instagram, and business marketing.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          {/* Primary Meta Tags */}
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <meta
            name="keywords"
            content="Videomatics AI, AI video generator, AI-powered video creation, automated video editing, AI video maker, AI-generated videos, video automation tool, AI short videos, AI video software, AI video editor, AI marketing videos, AI explainer videos, AI content creation, video creation tool, AI-powered video production, AI-driven video marketing, AI voiceover videos, AI motion graphics, AI storytelling, AI reels creator, AI YouTube video maker, AI TikTok video creator, AI video synthesis, AI animation tool, AI promo videos, AI-generated content, AI video ad maker, AI business videos, AI social media videos, AI-generated stories, AI video script generator, AI-powered video enhancement, AI caption generator, AI transcription tool, AI visual storytelling, AI-based video studio, AI-powered content marketing, AI influencer videos, AI branding videos, AI short film creator, AI corporate videos, AI real estate videos, AI e-learning videos, AI product demo videos, AI webinar video creator, AI news video maker, AI entertainment videos, AI travel videos, AI fitness videos, AI lifestyle videos, AI fashion videos, AI tech videos, AI education videos, AI explainer animation, AI whiteboard animation, AI 2D animation, AI 3D animation, AI motion tracking, AI deepfake videos, AI augmented reality videos, AI virtual reality videos, AI video blogging, AI content repurposing, AI social media automation, AI live streaming videos, AI-generated slideshow, AI voice synthesis, AI dubbing tool, AI subtitles generator, AI video personalization, AI custom branding videos, AI interactive videos, AI personalized video marketing, AI-generated memes, AI-generated GIFs, AI music video creator, AI wedding video editor, AI event highlight videos, AI documentary video creator, AI presentation videos, AI tutorial videos, AI learning content creator, AI AI-generated news clips, AI PR video maker, AI stock footage AI video, AI video ads, AI performance marketing videos, AI B2B video marketing, AI SaaS video creation, AI startup video maker, AI AI-driven social media campaigns, AI conversion-optimized video creation, AI explainer video generator, AI AI-powered storytelling, AI data-driven video content, AI YouTube shorts creator, AI social video content AI-powered engagement tools"
          />
          <meta name="author" content="Videomatics AI" />
          <meta name="robots" content="index, follow" />

          {/* Open Graph / Facebook */}
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.description} />
          <meta property="og:image" content="https://vidematics-ai.netlify.app/og-image.jpg" />
          <meta property="og:url" content="https://vidematics-ai.netlify.app/" />
          <meta property="og:type" content="website" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={metadata.title} />
          <meta name="twitter:description" content={metadata.description} />
          <meta name="twitter:image" content="https://vidematics-ai.netlify.app/og-image.jpg" />

          {/* Canonical URL */}
          <link rel="canonical" href="https://vidematics-ai.netlify.app/" />
        </Head>

        <body className={outfit.className}>
          <Provider>{children}</Provider>
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
