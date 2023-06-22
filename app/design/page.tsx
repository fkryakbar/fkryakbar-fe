import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";


export const metadata = {
    title: 'The Design from this Site',
}

export default function Projects() {
    return (
        <>
            <div className="dark:text-white transition-all">
                <Navbar />
                <div className="lg:w-[70%] w-[90%] mx-auto mt-[30px]">
                    <div>
                        <h1 className="font-semibold text-5xl text-gradient-primary">
                            Color Palette
                        </h1>
                        <p className="dark:text-gray-300 lg:text-base text-sm mt-2">Palette that I&apos;m using on this Site</p>

                        <div className="flex flex-wrap lg:flex-row flex-col mt-5 gap-8">
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-white rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">White Background</p>
                                    <p className="dark:text-gray-500 text-xs">#FFFFFF</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-slate-950 rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Dark Background</p>
                                    <p className="dark:text-gray-500 text-xs">#020617</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-[#0061ff] rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Primary 1</p>
                                    <p className="dark:text-gray-500 text-xs uppercase">#0061ff</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-[#60efff] rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Primary 2</p>
                                    <p className="dark:text-gray-500 text-xs uppercase">#60efff</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-gradient-to-r from-[#0061ff] to-[#60efff] rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Primary Gradient</p>
                                    <p className="dark:text-gray-500 text-xs uppercase">#0061ff to #60efff</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-gray-500 rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Text on Dark Mode</p>
                                    <p className="dark:text-gray-500 text-xs uppercase">#6b7280</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-[#c084fc1c] rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Gradient Background 1</p>
                                    <p className="dark:text-gray-500 text-xs uppercase">#c084fc1c</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-[#0ea5e969] rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Gradient Background 2</p>
                                    <p className="dark:text-gray-500 text-xs uppercase">#0ea5e969</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-[#e879f942] rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Gradient Background 3</p>
                                    <p className="dark:text-gray-500 text-xs uppercase">#e879f942</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-center">
                                <div className="h-10 w-10 bg-[#4f46e566] rounded border-[1px] dark:border-white border-gray-300"></div>
                                <div className="">
                                    <p className="dark:text-gray-300 lg:text-base font-semibold">Gradient Background 4</p>
                                    <p className="dark:text-gray-500 text-xs uppercase">#4f46e566</p>
                                </div>
                            </div>
                        </div>
                        <h1 className="my-5 text-xs dark:text-gray-300">
                            Font family : Poppins
                        </h1>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}