import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from '@/.contentlayer/generated';
import { compareDesc } from 'date-fns';

export default function FeaturedProject() {
    const projects = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).filter((post) => post.category == 'project').slice(0, 3);
    return (
        <>
            <h1 className="font-semibold text-3xl text-gradient-primary">
                Featured Projects
            </h1>
            <h1 className="dark:text-gray-300 lg:text-base text-sm mt-2">
                I take pride in several projects that I have worked on.
            </h1>
            <div className="flex mt-4 lg:flex-row flex-col gap-5 justify-center flex-wrap">
                {
                    projects.map(project => {
                        return (
                            <Link key={project._id} href={`/projects/${project._raw.flattenedPath}`} className="lg:basis-[32%]">
                                <div className="rounded-md border-[1px] border-gray-500 p-4 group transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                                    <h1 className="font-bold text-xl">
                                        {project.title}
                                    </h1>
                                    <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                                        {project.description}
                                    </p>
                                    <div className='mt-3 rounded-md max-h-[200px] overflow-clip drop-shadow-sm'>
                                        <Image width={350} height={350} className='w-full' src={`${project.image_link}`} alt='Thumbnail' />
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
            <Link href={'/projects'}>
                <button className='btn mt-4 font-bold'>Find More Projects</button>
            </Link>
        </>
    )
}