'use client'

import About from '@/components/about'
import Experience from '@/components/experience'
import Header from '@/components/header'
import Projects from '@/components/projects'
import { useEffect, useRef, useState } from 'react'

interface SectionRefs {
    [key: string]: React.RefObject<HTMLElement>
}

export default function Home() {
    const sectionRefs: SectionRefs = {
        section1: useRef<HTMLElement | null>(null),
        section2: useRef<HTMLElement | null>(null),
        section3: useRef<HTMLElement | null>(null),
    }

    const [activeSection, setActiveSection] = useState<string | null>(null)

    const handleScroll = () => {
        for (const sectionName in sectionRefs) {
            const sectionRef = sectionRefs[sectionName].current

            if (sectionRef && sectionRef instanceof HTMLElement) {
                const boundingBox = sectionRef.getBoundingClientRect()
                const isInSection =
                    boundingBox.top >= 0 &&
                    boundingBox.bottom <= window.innerHeight

                if (isInSection) {
                    setActiveSection(sectionName)
                    break
                }
            }
        }
    }
    useEffect(() => {
        handleScroll()
    }, [])
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={`relative w-full`}>
            <div
                className={`z-1 fixed left-0 top-0 min-h-screen w-full animate-bgAnimation bg-background bg-[url('/img/stars.svg')]`}
            />
            <div className='z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0'>
                <div className={`lg:flex lg:justify-between lg:gap-4`}>
                    <Header activeSection={activeSection} />
                    <main className='z-10 pt-20 lg:w-1/2 lg:py-24'>
                        <About ref={sectionRefs.section1} />
                        <Experience ref={sectionRefs.section2} />
                        <Projects ref={sectionRefs.section3} />
                    </main>
                </div>
            </div>
        </div>
    )
}
