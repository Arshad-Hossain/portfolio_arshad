import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Technologies></Technologies>
      <Footer></Footer>
    </>
  );
}
