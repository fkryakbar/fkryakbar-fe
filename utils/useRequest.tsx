"use client"
import useSWR from "swr";

const fetcher = (url: string) => fetch(url, {
    headers: {
        'Accept': 'application/json',
        'x-client-token': `${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`
    }
}).then((res) => res.json());

const useRequest = (path_request: string) => {
    const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}${path_request}`, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    })


    return { data, error, isLoading }

}

export default useRequest