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
                                Hi! My name is Ahmad Fikri Akbar and Currently, I am a student pursuing a degree in Mathematics Education at Lambung Mangkurat University. Alongside my studies, I have been working on developing my skills in programming. I am an avid self-learner, relying on online resources, particularly YouTube, to enhance my programming abilities.
                            </p>
                            <p className="mt-2">
                                I am a passionate individual who started learning programming in 2022. I have a particular interest in web development and thoroughly enjoy exploring this field. I am always eager to learn new things and expand my knowledge. On this website, I plan to write blog posts and showcase various projects that I have worked on. Throughout my learning journey, I have successfully completed several real projects. These projects have allowed me to apply my knowledge and showcase my capabilities. I am excited to share these projects and other valuable insights through my blog on this website.
                            </p>
                            <p className="mt-2">
                                If you have any questions or would like to engage in a discussion, please feel free to reach me out. I would be delighted to assist you in any way I can.
                            </p>
                        </article>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}