import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { compareDesc, format, parseISO } from "date-fns";
import PostsCounter from "./PostsCounter";
import { allPosts } from "@/.contentlayer/generated";

export default function SomeBlog() {
    const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).filter((post) => post.category == 'post').slice(0, 3);
    return (
        <>
            <h1 className="font-semibold text-3xl text-gradient-primary">
                Featured Posts
            </h1>
            <h1 className="dark:text-gray-300 lg:text-base text-sm mt-2">
                Sharing about thoughts, mathematics, and other stuff
            </h1>
            {/* <OnProgress className='mt-10' /> */}
            <div className="flex mt-4 lg:flex-row flex-col gap-5 justify-center flex-wrap">
                {
                    posts.map(post => {
                        return (
                            <>
                                <Link key={post._id} href={`/blog/${post._raw.flattenedPath}`} className="lg:basis-[32%]">
                                    <div className="rounded-md border-[1px] border-gray-500 group hover:scale-105 transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                                        <div className='rounded-t-md max-h-[200px] overflow-clip drop-shadow-sm'>
                                            <Image className='w-full' src={`${post.image_link}`} alt={`${post.title}`} width={350} height={350} />
                                        </div>
                                        <div className="p-4">
                                            <h1 className="font-bold text-xl">
                                                {post.title}
                                            </h1>
                                            <Suspense fallback={<>Loading</>}>
                                                <PostsCounter slug={`${post._raw.flattenedPath}`} />
                                            </Suspense>
                                            <h1 className="font-semibold mt-3 text-sm">
                                                {format(parseISO(post.date), 'LLLL d, yyyy')}
                                            </h1>
                                            <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                                                {post.description}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }
            </div>
            <Link href={'/blog'}>
                <button className='btn mt-4 font-bold'>Show More Posts</button>
            </Link>
        </>
    )
}