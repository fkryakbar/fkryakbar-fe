import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import profile from '@/public/profil.jpg'

export const metadata = {
    title: 'About Me',
}
export default function About() {
    return (
        <>
            <div className="dark:text-white">
                <Navbar />
                <div className="lg:w-[70%] w-[90%] mx-auto mt-[50px]">
                    <h1 className="font-semibold">
                        <p className="lg:text-3xl text-2xl">About Me</p>
                        <p className="text-transparent text-gradient-primary lg:text-4xl text-3xl mt-1">Ahmad Fikri Akbar</p>
                    </h1>
                    <div className="mt-5 mb-10">
                        <div className="lg:w-[400px] w-[160px] float-right overflow-hidden ml-3 mb-3">
                            <Image className="rounded-md w-full" src={profile.src} alt="profile" height={300} width={300} />
                        </div>
                        <article className="lg:text-lg text-xs dark:text-gray-300 text-gray-600 lg:text-justify">
                            <p>
                                Hi! My name is Ahmad Fikri Akbar. I hold a degree in Mathematics Education from Lambung Mangkurat University. Currently, I work as a civil servant (ASN) at the Ministry of Religious Affairs of the Republic of Indonesia, specifically in the Directorate of Islamic Education.
                            </p>
                            <p className="mt-2">
                                Alongside my role as a government employee, I am also actively involved in web development. My journey into programming began in 2021, and since then, I have been continuously honing my skills through self-learning, utilizing various online resources. I have a deep passion for web development and enjoy exploring new technologies in this field.
                            </p>
                            <p className="mt-2">
                                On this website, I plan to share my projects, insights, and blog posts related to programming and web development. Through my learning journey, I have successfully completed several real-world projects that demonstrate my skills and expertise.
                            </p>
                            <p className="mt-2">
                                If you have any questions or would like to discuss anything, feel free to reach out. I&apos;d be happy to connect and collaborate!
                            </p>
                        </article>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}