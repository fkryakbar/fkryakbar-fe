// 'use client'

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

export default function ProgressProvider({ children }: { children: React.ReactNode }) {
    return <>
        {children}
        {/* <ProgressBar color='#000000' height="4px" options={{ showSpinner: false }} shallowRouting /> */}
    </>

}