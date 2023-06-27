'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from 'next/navigation'
import StatCount from "./StatCount"

export default function Navbar() {
    const [isDark, setDark] = useState(true)
    const toggleTheme = () => {
        let savedTheme = localStorage.getItem('theme');
        if (savedTheme == 'dark') {
            localStorage.setItem('theme', 'light')
        } else if (savedTheme == 'light') {
            localStorage.setItem('theme', 'dark')
        }
        savedTheme = localStorage.getItem('theme');
        if (savedTheme == 'dark') {
            setDark(true)
            document.querySelector('html')?.classList.add('dark')
        } else if (savedTheme == 'light') {
            setDark(false)
            document.querySelector('html')?.classList.remove('dark')
        }
    }

    useEffect(() => {
        let savedTheme = localStorage.getItem('theme');
        if (!savedTheme) {
            savedTheme = 'dark'
            localStorage.setItem('theme', 'dark')
        }
        if (savedTheme == 'dark') {
            setDark(true)
            document.querySelector('html')?.classList.add('dark')
        } else if (savedTheme == 'light') {
            setDark(false)
            document.querySelector('html')?.classList.remove('dark')
        }
    }, [])


    const get_pathname = usePathname()
    const pathname = get_pathname.split('/')[1]
    return (
        <div className="w-full shadow">
            <StatCount/>
            <div className="w-full h-2 bg-gradient-to-r from-[#0061ff] to-[#60efff]">
            </div>
            <nav className="lg:w-[70%] w-[90%] mx-auto py-6 dark:text-white">
                <div className="flex justify-between items-center">
                    <ul className="flex gap-4">
                        <li className={`${pathname == '' ? 'text-gradient-primary' : null}`}>
                            <Link href={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className={`${pathname == 'blog' ? 'text-gradient-primary' : null}`}>
                            <Link href={'/blog'}>
                                Blog
                            </Link>
                        </li>
                        <li className={`${pathname == 'projects' ? 'text-gradient-primary' : null}`}>
                            <Link href={'/projects'}>
                                Projects
                            </Link>
                        </li>
                        <li className={`${pathname == 'about' ? 'text-gradient-primary' : null}`}>
                            <Link href={'/about'}>
                                About
                            </Link>
                        </li>
                    </ul>
                    <div>
                        <button onClick={toggleTheme} className="border-[1px] border-slate-500 hover:border-[#0061ff] hover:text-[#0061ff] p-2 rounded-md hover:scale-105 transition-all">
                            {
                                isDark ? (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>
                                    </>
                                )
                            }
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}