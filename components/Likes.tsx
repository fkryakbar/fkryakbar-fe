"use client"

import { useState } from "react"
import { mutate } from "swr"
export default function Likes({ slug }: { slug: string }) {
    const [isLiked, setLike] = useState(false)


    const countLikes = async () => {
        setLike(true)
        if (isLiked == false) {
            await fetch(`${process.env.NEXT_PUBLIC_API_URL}${`post/${slug}/likes`}`, {
                headers: {
                    'Accept': 'application/json',
                    'x-client-token': `${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`
                }
            })
            mutate(`${process.env.NEXT_PUBLIC_API_URL}post/${slug}`)
        }

    }

    return (
        <>
            <div className={`flex justify-center mt-5`}>
                <div onClick={e => {
                    countLikes()
                }} className="flex flex-col justify-center items-center hover:scale-110 transition-all">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className={`bi bi-heart-fill w-10 h-10 ${isLiked ? 'text-red-500' : 'dark:text-white'}`}
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                        />
                    </svg>
                    <p className="text-center font-semibold mt-2">{isLiked ? 'Thank You!' : 'Hit me!'}</p>
                </div>
            </div>

        </>
    )
}