"use client"

import useSWRImmutable from 'swr/immutable'

const fetcher = (url: string) => fetch(url, {
    headers: {
        'Accept': 'application/json',
        'x-client-token': `${process.env.NEXT_PUBLIC_CLIENT_TOKEN}`
    }
}).then((res) => res.json());

export default function StatCount() {

    const { data, error, isLoading } = useSWRImmutable(`${process.env.NEXT_PUBLIC_API_URL}statistics/count`, fetcher)
    return (
        <></>
    )
}