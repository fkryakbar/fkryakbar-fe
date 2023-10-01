import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostsCounter from "@/components/PostsCounter";
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from "next/link";
import { notFound } from 'next/navigation'
import Image from 'next/image'
import FeedBack from "@/components/FeedBack";
import { Suspense } from "react";
import Likes from "@/components/Likes";
import { CountViews } from "@/components/CountViews";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const project = allPosts.find((project) => project._raw.flattenedPath === params.slug && project.category == 'project')
    if (!project) notFound()
    return { title: project?.title }
}

export default function Projects({ params }: { params: { slug: string } }) {
    const project = allPosts.find((project) => project._raw.flattenedPath === params.slug && project.category == 'project')
    if (!project) notFound()
    return (
        <>
            <CountViews slug={params.slug} />
            <div className="dark:text-white transition-all">
                <Navbar />
                <div className="lg:w-[70%] w-[90%] mx-auto mt-[30px]">
                    <div className="w-full max-h-[420px] overflow-clip rounded-md shadow">
                        <Image width={1000} height={1000} src={`${project.image_link}`} alt="Thumbnail" className="w-full" />
                    </div>
                    <h1 className="mt-5 lg:text-4xl text-2xl font-bold">
                        {project.title}
                    </h1>
                    {
                        project.tech_stack ? (
                            <>
                                <div className="flex gap-2 text-xs mt-3">
                                    {
                                        project.tech_stack.map((stack, i) => {
                                            return (
                                                <div key={i} className="p-1 rounded bg-gray-500 dark:bg-gray-700 text-white">{stack}</div>
                                            )
                                        })
                                    }
                                </div>
                            </>) : null
                    }
                    <h1 className="dark:text-gray-400 text-gray-700 text-sm mt-2">
                        {project.description}
                    </h1>
                    {
                        project.demo_link ? (
                            <Link className="flex gap-1 text-sm items-center mt-2" href={`${project.demo_link}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                                </svg>
                                <p>On Live</p>
                            </Link>
                        ) : null
                    }
                    <Suspense fallback={<>Loading</>}>
                        <PostsCounter slug={`${params.slug}`} />
                    </Suspense>
                    <div className="h-[0.5px] bg-gray-600 mt-5"></div>
                    <div className="lg:flex gap-4">
                        <div className=" mt-5 prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: project.body.html }} />
                        <div>
                            <FeedBack slug={`${params.slug}`} />
                            <Likes slug={`${params.slug}`} />
                        </div>
                    </div>
                    <Link href={'/projects'} className="mt-5 mb-10 block text-gradient-primary">
                        Back to Projects
                    </Link>
                    <Footer />
                </div >
            </div >
        </>
    )
}