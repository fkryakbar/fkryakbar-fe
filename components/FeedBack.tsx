"use client"

import { FormEvent, useState } from "react"

const fetcher = async (url: string, data: FormData) => {
    return await fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'x-client-token': `${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`
        },
        body: data
    })
}

export default function FeedBack({ slug }: { slug: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [showErrors, setShowErrors] = useState(false);

    const sendRequest = async (e: FormEvent<HTMLFormElement>) => {
        setShowErrors(false)
        setIsLoading(true)
        e.preventDefault()
        const input = new FormData(e.currentTarget)
        input.append('slug', slug)
        const req = await fetcher(`${process.env.NEXT_PUBLIC_API_URL}feedback`, input);
        const data = await req.json();
        if (req.status == 200) {
            setIsSuccess(true);

        } else {
            setShowErrors(true)
        }
        setIsLoading(false)
    }
    return (
        <div className="mt-5">
            <h1 className="text-xl font-semibold">
                I would appreciate your feedback.
            </h1>
            <form action="" autoComplete="off" onSubmit={sendRequest}>
                <div className="mt-3">
                    <input name="name" type="text" placeholder="Name" className="dark:bg-gray-800 bg-gray-300 focus:outline-0 rounded-md p-2 w-[50%] disabled:text-gray-500" disabled={isSuccess || isLoading} />
                    <textarea name="feedback" id="" className="w-full mt-3 dark:bg-gray-800 bg-gray-300 rounded-md focus:outline-0 p-2 disabled:text-gray-500" placeholder="Your feed back" disabled={isSuccess || isLoading} ></textarea>
                    {
                        showErrors ? (
                            <>
                                <p className="text-sm text-red-600">Please complete all the required fields.</p>
                            </>
                        ) : null
                    }
                    {
                        isLoading ? (
                            <>
                                <button type="submit" className="btn mt-2" disabled={true}>Submitting</button>
                            </>
                        ) : (
                            <>
                                <button type="submit" className="btn mt-2 disabled:hover:scale-100 disabled:text-gray-500" disabled={isSuccess || isLoading}>{isSuccess ? 'Thank you for your feed back' : 'Submit'}</button>
                            </>
                        )
                    }
                </div>
            </form>
        </div>
    )
}