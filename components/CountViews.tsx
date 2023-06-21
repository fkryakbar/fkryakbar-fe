"use client"

import useRequest from "@/utils/useRequest"

export function CountViews({ slug }: { slug: string }) {
    useRequest(`post/${slug}/views`)
    return (
        <>
        </>
    )
}