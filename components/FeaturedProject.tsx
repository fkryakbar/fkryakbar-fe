import smafy from '@/public/smafy.png'
import Image from 'next/image'
import OnProgress from './OnProgress'
import Link from 'next/link'

export default function FeaturedProject() {
    return (
        <>
            <h1 className="font-semibold text-3xl text-gradient-primary">
                Featured Projects
            </h1>
            <h1 className="dark:text-gray-300 lg:text-base text-sm mt-2">
                I take pride in several projects that I have worked on.
            </h1>
            <OnProgress className='mt-10' />
            {/* <div className="flex mt-4 lg:flex-row flex-col gap-5 justify-center flex-wrap">
                <div className="rounded-md border-[1px] border-gray-500 lg:basis-[32%] p-4 group hover:scale-105 transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                    <h1 className="font-bold text-xl">
                        Smafy
                    </h1>
                    <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                        The comprehensive web-based learning platform designed to help teachers create interactive, engaging, and effective classroom experiences for their students.
                    </p>
                    <div className='mt-3 rounded-md max-h-[200px] overflow-clip drop-shadow-sm'>
                        <Image className='w-full' src={smafy.src} alt='Smafy' width={300} height={300} />
                    </div>
                    <div className='mt-3 text-sm dark:text-gray-300 text-slate-600 font-semibold flex'>
                        <h1>
                            Details
                            <div className='h-[2px] bg-gradient-to-br from-[#0061ff] to-[#60efff] opacity-0 group-hover:opacity-100 transition-all'>
                            </div>
                        </h1>
                    </div>
                </div>
                <div className="rounded-md border-[1px] border-gray-500 lg:basis-[32%] p-4 group hover:scale-105 transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                    <h1 className="font-bold text-xl">
                        Smafy
                    </h1>
                    <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                        The comprehensive web-based learning platform designed to help teachers create interactive, engaging, and effective classroom experiences for their students.
                    </p>
                    <div className='mt-3 rounded-md max-h-[200px] overflow-clip drop-shadow-sm'>
                        <Image className='w-full' src={smafy.src} alt='Smafy' width={300} height={300} />
                    </div>
                    <div className='mt-3 text-sm dark:text-gray-300 text-slate-600 font-semibold flex'>
                        <h1>
                            Details
                            <div className='h-[2px] bg-gradient-to-br from-[#0061ff] to-[#60efff] opacity-0 group-hover:opacity-100 transition-all'>
                            </div>
                        </h1>
                    </div>
                </div>
                <div className="rounded-md border-[1px] border-gray-500 lg:basis-[32%] p-4 group hover:scale-105 transition-all hover:drop-shadow-md bg-white dark:bg-slate-950">
                    <h1 className="font-bold text-xl">
                        Smafy
                    </h1>
                    <p className="text-xs line-clamp-2 mt-3 dark:text-gray-300 text-slate-600">
                        The comprehensive web-based learning platform designed to help teachers create interactive, engaging, and effective classroom experiences for their students.
                    </p>
                    <div className='mt-3 rounded-md max-h-[200px] overflow-clip drop-shadow-sm'>
                        <Image className='w-full' src={smafy.src} alt='Smafy' width={300} height={300} />
                    </div>
                    <div className='mt-3 text-sm dark:text-gray-300 text-slate-600 font-semibold flex'>
                        <h1>
                            Details
                            <div className='h-[2px] bg-gradient-to-br from-[#0061ff] to-[#60efff] opacity-0 group-hover:opacity-100 transition-all'>
                            </div>
                        </h1>
                    </div>
                </div>
            </div> */}
            <Link href={'/projects'}>
                <button className='btn mt-4 font-bold'>Find More Projects</button>
            </Link>
        </>
    )
}