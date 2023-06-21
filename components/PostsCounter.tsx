"use client"

import useRequest from "@/utils/useRequest"

const Loading = () => {
    return (
        <>
            <div className="flex gap-2 mt-1">
                <div className="dark:bg-slate-800 bg-slate-300 w-14 rounded h-4"></div>
                <div className="dark:bg-slate-800 bg-slate-300 w-14 rounded h-4"></div>
            </div>
        </>
    )
}

export default function PostsCounter({ slug }: { slug: string }) {
    const { data, error, isLoading } = useRequest(`post/${slug}`);
    if (error) return "An error has occurred.";
    if (isLoading) return <Loading />;
    return (
        <>
            <div className="flex gap-4 text-xs mt-3 items-center">
                <div className="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <p className="text-gradient-primary">
                        {data.data.likes}
                    </p>
                </div>
                <div className="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <p className="text-gradient-primary">
                        {data.data.views}
                    </p>
                </div>
            </div>
        </>
    )
}