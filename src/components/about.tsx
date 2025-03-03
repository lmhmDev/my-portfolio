import {
    forwardRef,
    RefObject,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react'

interface Props {}

const About: React.ForwardRefRenderFunction<HTMLElement, Props> = (
    props,
    ref
) => {
    return (
        <section
            className='z-30 mt-2 w-full scroll-mt-36 pb-24 lg:mb-36'
            id='about'
            ref={ref}
        >
            <p className='sticky top-0 z-40 bg-background/90 py-4 text-xl text-white lg:hidden'>
                About
            </p>
            <div className='relative z-30 mt-10 lg:mt-0 [&>p]:mb-4 [&>p]:leading-normal [&>p]:text-gray-400 [&_a]:transition [&_span]:text-slate-100'>
                <p>
                    I&#39;ve always been interested in technology, started
                    creating small games and some joke android apps at home,
                    that&#39;s how coding entered my life. Up to the present,
                    I&#39;ve been lucky to work and build software for a{' '}
                    <span>big corporation</span>, a{' '}
                    <span>small software company</span> and a couple{' '}
                    <span>start-ups</span> .
                </p>
                <p>
                    Although I started my career focused in mobile develpoment,
                    I quickly transitioned to <span>Fullstack web dev.</span>{' '}
                    Nowadays my main concern is becoming the best version of
                    myself, related and non-related to coding.
                </p>
                <p>
                    When I&#39;m not coding, I&#39;m probably hanging out with
                    my friends, or playing videogames at home with my{' '}
                    <span className='text-slate-100'>2 cats</span> (they just
                    look).
                </p>
            </div>
        </section>
    )
}

export default forwardRef(About)
