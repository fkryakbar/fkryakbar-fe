import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Play from "@/components/Play";

export const metadata = {
    title: 'Play With Me',
}

export default function Projects() {
    return (
        <>
            <div className="dark:text-white transition-all">
                <Navbar />
                <div className="lg:w-[70%] w-[90%] mx-auto mt-[30px]">
                    <Play />
                    <Footer />
                </div>
            </div>
        </>
    )
}