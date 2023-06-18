import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OnProgress from "@/components/OnProgress";
import PostsCounter from "@/components/PostsCounter";
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from "next/link";
import { notFound } from 'next/navigation'

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
            <div className="dark:text-white transition-all">
                <Navbar />
                <div className="lg:w-[70%] w-[90%] mx-auto mt-[100px]">
                    <div className="w-full max-h-[420px] overflow-clip rounded-md">
                        <img src={`${post.image_link}`} alt="" className="w-full" />
                    </div>
                    <h1 className="mt-5 lg:text-4xl text-2xl font-bold">
                        {post.title}
                    </h1>
                    <h1 className="dark:text-gray-400 text-gray-700 text-sm mt-2">
                        Published on {format(parseISO(post.date), 'LLLL d, yyyy')}
                    </h1>
                    <PostsCounter />
                    <div className="h-[0.5px] bg-gray-600 mt-5"></div>
                    <div className="[&>*]:mb-3 [&>*:last-child]:mb-0  mt-5 prose dark:prose-invert" dangerouslySetInnerHTML={{ __html: post.body.html }} />
                    <Link href={'/blog'} className="mt-5 mb-10 block text-gradient-primary">
                        Back to blog
                    </Link>
                    <Footer />
                </div>
            </div>
        </>
    )
}