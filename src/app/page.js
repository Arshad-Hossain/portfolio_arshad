import About from "@/components/About";
import Academics from "@/components/Aceademics";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Technologies></Technologies>
      <Projects></Projects>
      <Academics></Academics>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}
