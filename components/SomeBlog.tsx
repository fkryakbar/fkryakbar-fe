import Image from "next/image";
import smafy from '@/public/smafy.png'

export default function SomeBlog() {
    return (
        <>
            <h1 className="font-semibold text-3xl text-gradient-primary">
                Featured Posts
            </h1>
            <h1 className="dark:text-gray-300 lg:text-base text-sm mt-2">
                Sharing about thoughts, mathematics, and other stuff
            </h1>
            <div className="flex mt-4 lg:flex-row flex-col gap-5 justify-center flex-wrap">
                <div className="rounded-md border-[1px] border-gray-500 lg:basis-[32%] group hover:scale-105 transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                    <div className='rounded-t-md max-h-[200px] overflow-clip drop-shadow-sm'>
                        <Image className='w-full' src={smafy.src} alt='Smafy' width={300} height={300} />
                    </div>
                    <div className="p-4">
                        <h1 className="font-bold text-xl">
                            Smafy
                        </h1>
                        <div className="flex gap-4 text-xs mt-3 items-center">
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <p className="text-gradient-primary">
                                    1000
                                </p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gradient-primary">
                                    1000
                                </p>
                            </div>
                        </div>
                        <h1 className="font-semibold mt-3 text-sm">
                            September 20, 2023
                        </h1>
                        <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                            The comprehensive web-based learning platform designed to help teachers create interactive, engaging, and effective classroom experiences for their students.
                        </p>
                    </div>
                </div>
                <div className="rounded-md border-[1px] border-gray-500 lg:basis-[32%] group hover:scale-105 transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                    <div className='rounded-t-md max-h-[200px] overflow-clip drop-shadow-sm'>
                        <Image className='w-full' src={smafy.src} alt='Smafy' width={300} height={300} />
                    </div>
                    <div className="p-4">
                        <h1 className="font-bold text-xl">
                            Smafy
                        </h1>
                        <div className="flex gap-4 text-xs mt-3 items-center">
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <p className="text-gradient-primary">
                                    1000
                                </p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gradient-primary">
                                    1000
                                </p>
                            </div>
                        </div>
                        <h1 className="font-semibold mt-3 text-sm">
                            September 20, 2023
                        </h1>
                        <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                            The comprehensive web-based learning platform designed to help teachers create interactive, engaging, and effective classroom experiences for their students.
                        </p>
                    </div>
                </div>
                <div className="rounded-md border-[1px] border-gray-500 lg:basis-[32%] group hover:scale-105 transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                    <div className='rounded-t-md max-h-[200px] overflow-clip drop-shadow-sm'>
                        <Image className='w-full' src={smafy.src} alt='Smafy' width={300} height={300} />
                    </div>
                    <div className="p-4">
                        <h1 className="font-bold text-xl">
                            Smafy
                        </h1>
                        <div className="flex gap-4 text-xs mt-3 items-center">
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <p className="text-gradient-primary">
                                    1000
                                </p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className="text-gradient-primary">
                                    1000
                                </p>
                            </div>
                        </div>
                        <h1 className="font-semibold mt-3 text-sm">
                            September 20, 2023
                        </h1>
                        <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                            The comprehensive web-based learning platform designed to help teachers create interactive, engaging, and effective classroom experiences for their students.
                        </p>
                    </div>
                </div>
            </div>
            <button className='btn mt-4 font-bold'>Show More Posts</button>
        </>
    )
}