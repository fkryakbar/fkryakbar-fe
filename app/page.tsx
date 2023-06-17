import Navbar from "@/components/Navbar";
import Link from "next/link";
import TechStack from "@/components/TechStack";
import FeaturedProject from "@/components/FeaturedProject";
import SomeBlog from "@/components/SomeBlog";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <>
      <div className="dark:text-white transition-all">
        <Navbar />
        <div className="lg:w-[70%] w-[90%] mx-auto mt-[160px]">
          <Hero />
          <div className="mt-20">
            <TechStack />
          </div>
          <div className="mt-20">
            <FeaturedProject />
          </div>
          <div className="mt-20">
            <SomeBlog />
          </div>
          <div className="mt-20">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
