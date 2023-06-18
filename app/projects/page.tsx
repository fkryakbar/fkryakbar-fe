import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OnProgress from "@/components/OnProgress";
import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from 'next/link'
import smafy from '@/public/smafy.png'
import Image from 'next/image'


export const metadata = {
    title: 'Projects',
}
export default function Projects() {
    const projects = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).filter((post) => post.category == 'project');
    console.log(projects)
    return (
        <>
            <div className="dark:text-white transition-all">
                <Navbar />
                <div className="lg:w-[70%] w-[90%] mx-auto mt-[160px]">
                    <h1 className="font-semibold text-5xl text-gradient-primary">
                        Projects
                    </h1>
                    <h1 className="dark:text-gray-300 lg:text-base text-sm mt-2">
                        I take pride in several projects that I have worked on.
                    </h1>
                    <div className="flex mt-4 lg:flex-row flex-col gap-5 justify-center flex-wrap mb-[100px]">
                        {
                            projects.map(project => {
                                return (
                                    <Link href={`/projects/${project._raw.flattenedPath}`} className="lg:basis-[32%]">
                                        <div className="rounded-md border-[1px] border-gray-500 p-4 group hover:scale-105 transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                                            <h1 className="font-bold text-xl">
                                                {project.title}
                                            </h1>
                                            <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                                                {project.description}
                                            </p>
                                            <div className='mt-3 rounded-md max-h-[200px] overflow-clip drop-shadow-sm'>
                                                <img className='w-full' src={`${project.image_link}`} alt='Smafy' />
                                            </div>
                                            <div className='mt-3 text-sm dark:text-gray-300 text-slate-600 font-semibold flex'>
                                                <h1>
                                                    Details
                                                    <div className='h-[2px] bg-gradient-to-br from-[#0061ff] to-[#60efff] opacity-0 group-hover:opacity-100 transition-all'>
                                                    </div>
                                                </h1>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}