"use client"
import useSWRImmutable from "swr/immutable";
import Footer from "./Footer";
import Navbar from "./Navbar";

const LoadingSkelton = () => {
    return (
        <>
            <div className="flex lg:flex-row flex-col justify-center gap-3 mt-5">
                <div className="basis-[48%] border-[1px] border-gray-500 rounded flex justify-center items-center p-4">
                    <div className="text-center">
                        <p className="font-bold text-xl">Visitors</p>
                        <div className="animate-pulse rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[70px] mx-auto mt-2"></div>
                    </div>
                </div>
                <div className="basis-[48%] border-[1px] border-gray-500 rounded flex justify-center items-center p-4">
                    <div className="text-center">
                        <p className="font-bold text-xl">Projects and Blogs</p>
                        <div className="animate-pulse rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2 mx-auto"></div>
                        <div className="animate-pulse rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2 mx-auto"></div>
                        <div className="animate-pulse rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2 mx-auto"></div>
                    </div>
                </div>
            </div>
            <h1 className="text-3xl font-semibold mt-8">Details</h1>
            <div className="flex flex-col mb-10">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm font-light">
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            Post ID
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Views
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            Likes
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="animate-pulse">
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[150px] mt-2"></div></td>
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2"></div></td>
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2"></div></td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[150px] mt-2"></div></td>
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2"></div></td>
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2"></div></td>
                                    </tr>
                                    <tr className="border-b dark:border-neutral-500">
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[150px] mt-2"></div></td>
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2"></div></td>
                                        <td className="whitespace-nowrap px-6 py-4"><div className="rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2"></div></td>
                                    </tr>
                                </tbody>
                                <thead className="border-b font-medium dark:border-neutral-500">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">
                                            Total
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            <div className="animate-pulse rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2"></div>
                                        </th>
                                        <th scope="col" className="px-6 py-4">
                                            <div className="animate-pulse rounded-full bg-slate-200 dark:bg-slate-700 h-4 w-[60px] mt-2"></div>
                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const fetcher = (url: string) => fetch(url, {
    headers: {
        'Accept': 'application/json',
        'x-client-token': `${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`
    }
}).then((res) => res.json());
export default function StatisticsComponent() {
    const { data, error, isLoading } = useSWRImmutable(`${process.env.NEXT_PUBLIC_API_URL}statistics`, fetcher)

    return (
        <div className="dark:text-white transition-all">
            <Navbar />
            <div className="lg:w-[70%] w-[90%] mx-auto mt-[30px]">
                <h1 className="text-3xl font-semibold">Statistics</h1>
                {
                    isLoading ? (
                        <><LoadingSkelton /></>
                    ) : (
                        <>
                            <div className="flex lg:flex-row flex-col justify-center gap-3 mt-5">
                                <div className="basis-[48%] border-[1px] border-gray-500 rounded flex justify-center items-center p-4">
                                    <div className="text-center">
                                        <p className="font-bold text-xl">Visitors</p>
                                        <p className="text-lg font-semibold">{data.data.visitors}</p>
                                    </div>
                                </div>
                                <div className="basis-[48%] border-[1px] border-gray-500 rounded flex justify-center items-center p-4">
                                    <div className="text-center">
                                        <p className="font-bold text-xl">Projects and Blogs</p>
                                        <p className="text-lg font-semibold">{data.data.posts} <span className="text-xs font-sans">Total</span></p>
                                        <p className="text-lg font-semibold">{data.data.likes} <span className="text-xs font-sans">Likes</span></p>
                                        <p className="text-lg font-semibold">{data.data.views} <span className="text-xs font-sans">Views</span></p>
                                    </div>
                                </div>
                            </div>
                            <h1 className="text-3xl font-semibold mt-8">Details</h1>
                            <div className="flex flex-col mb-10">
                                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                        <div className="overflow-hidden">
                                            <table className="min-w-full text-left text-sm font-light">
                                                <thead className="border-b font-medium dark:border-neutral-500">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4">
                                                            Post ID
                                                        </th>
                                                        <th scope="col" className="px-6 py-4">
                                                            Views
                                                        </th>
                                                        <th scope="col" className="px-6 py-4">
                                                            Likes
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        data.data.post_data.map((post: any) => {
                                                            return (
                                                                <tr key={post.id} className="border-b dark:border-neutral-500">
                                                                    <td className="whitespace-nowrap px-6 py-4">{post.slug}</td>
                                                                    <td className="whitespace-nowrap px-6 py-4">{post.views}</td>
                                                                    <td className="whitespace-nowrap px-6 py-4">{post.likes}</td>
                                                                </tr>

                                                            )
                                                        })
                                                    }
                                                </tbody>
                                                <thead className="border-b font-medium dark:border-neutral-500">
                                                    <tr>
                                                        <th scope="col" className="px-6 py-4">
                                                            Total
                                                        </th>
                                                        <th scope="col" className="px-6 py-4">
                                                            {data.data.views}
                                                        </th>
                                                        <th scope="col" className="px-6 py-4">
                                                            {data.data.likes}
                                                        </th>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    error ? (
                        <>Error has occurre</>
                    ) : null
                }

                <Footer />
            </div>
        </div>
    )
}