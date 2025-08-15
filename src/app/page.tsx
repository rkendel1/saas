import About from "@/components/About";
import CallToAction from "@/components/CallToAction";

import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";

import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";



import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ID8 is a Native AI Ideation Platform",
  description: "ID8 is a Native AI Ideation Platform built for the success of the solo founder.",
};

export default function Home() {


  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <About />
      <CallToAction />
      <Pricing />
      
      
     
      <Contact />
   
    </main>
  );
}
