import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PostsCounter from "@/components/PostsCounter";
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from "next/link";
import { notFound } from 'next/navigation'
import Image from "next/image";
import FeedBack from "@/components/FeedBack";
import { Suspense } from "react";
import Likes from "@/components/Likes";
import { CountViews } from "@/components/CountViews";

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))

export const generateMetadata = ({ params }: { params: { slug: string } }) => {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)
    if (!post) notFound()
    return { title: post.title }
}

export default function Projects({ params }: { params: { slug: string } }) {
    const post = allPosts.find((post) => post._raw.flattenedPath === params.slug && post.category == 'post')
    if (!post) notFound()
    return (
        <>
            <CountViews slug={params.slug} />
            <div className="dark:text-white transition-all">
                <Navbar />
                <div className="lg:w-[70%] w-[90%] mx-auto mt-[120px]">
                    <div className="w-full max-h-[420px] overflow-clip rounded-md drop-shadow">
                        <Image width={1000} height={1000} src={`${post.image_link}`} alt="Thumbnail" className="w-full" />
                    </div>
                    <h1 className="mt-5 lg:text-4xl text-2xl font-bold">
                        {post.title}
                    </h1>
                    <h1 className="dark:text-gray-400 text-gray-700 text-sm mt-2">
                        Published on {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </h1>
                    <Suspense fallback={<>loading</>}>
                        <PostsCounter slug={`${params.slug}`} />
                    </Suspense>
                    <div className="h-[0.5px] bg-gray-600 mt-5"></div>
                    <div className="lg:flex gap-4">
                        <div className="mt-5 prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.body.html }} />
                        <div>
                            <FeedBack slug={`${params.slug}`} />
                            <Likes slug={`${params.slug}`} />
                        </div>
                    </div>
                    <Link href={'/blog'} className="mt-5 mb-10 block text-gradient-primary">
                        Back to blog
                    </Link>
                    <Footer />
                </div>
            </div>
        </>
    )
}