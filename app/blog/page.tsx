import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OnProgress from "@/components/OnProgress";

export default function Blog() {
  return (
    <>
      <div className="dark:text-white transition-all">
        <Navbar />
        <div className="lg:w-[70%] w-[90%] mx-auto mt-[160px]">
          <OnProgress />
          <Footer />
        </div>
      </div>
    </>
  )
}