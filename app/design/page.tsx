import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OnProgress from "@/components/OnProgress";


export const metadata = {
    title: 'The Design from this Site',
}

export default function Projects() {
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