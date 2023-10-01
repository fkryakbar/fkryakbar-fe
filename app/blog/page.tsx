import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import OnProgress from "@/components/OnProgress";
import PostsCounter from "@/components/PostsCounter";
import { allPosts } from 'contentlayer/generated'
import { compareDesc, format, parseISO } from 'date-fns'
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
export default function Blog() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date))).filter((post) => post.category == 'post');
  return (
    <>
      <div className="dark:text-white transition-all">
        <Navbar />
        <div className="lg:w-[70%] w-[90%] mx-auto mt-[30px]">
          <h1 className="font-semibold text-5xl text-gradient-primary">
            Posts
          </h1>
          <h1 className="dark:text-gray-300 lg:text-base text-sm mt-2">
            Sharing about thoughts, mathematics, and other stuff
          </h1>
          <div className="flex mt-4 lg:flex-row flex-col gap-5 flex-wrap mb-[100px]">
            {
              posts.map(post => {
                return (
                  <>
                    <Link key={post._id} href={`/blog/${post._raw.flattenedPath}`} className="lg:basis-[32%]">
                      <div className="rounded-md border-[1px] border-gray-500 group transition-all hover:shadow-md bg-white dark:bg-slate-950">
                        <div className='rounded-t-md max-h-[200px] overflow-clip shadow-sm'>
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



          {/* <OnProgress /> */}
          <Footer />
        </div>
      </div>
    </>
  )
}