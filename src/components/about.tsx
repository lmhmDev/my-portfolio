import {
    forwardRef,
    RefObject,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react'

interface Props { }

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
            <p className='sticky z-40 top-0 bg-background/90 py-4 text-xl text-white lg:hidden'>
                About
            </p>
            <div className='relative z-30 mt-10 lg:mt-0 [&>p]:mb-4 [&>p]:leading-normal [&>p]:text-gray-400 [&_a]:text-slate-100 [&_a]:transition'>
                <p>
                    I&#39;ve always been interested in technology, started
                    creating small games and some joke android apps at home,
                    that&#39;s how coding entered my life. Up to the present,
                    I&#39;ve been lucky to work and build software for a{' '}
                    <a
                        className='hover:text-blue-400'
                        href='https://qiproaccenture.negocio.site/?utm_source=gmb&utm_medium=referral'
                        target='_blank'
                    >
                        big corporation
                    </a>
                    , a{' '}
                    <a
                        className='hover:text-blue-400'
                        href='https://rocketfy.es/'
                        target='_blank'
                    >
                        small software company
                    </a>{' '}
                    and a{' '}
                    <a
                        className='hover:text-blue-400'
                        href='https://es.linkedin.com/company/power-bargain'
                        target='_blank'
                    >
                        start-up
                    </a>
                    .
                </p>
                <p>
                    Although I started my career focused in mobile develpoment,
                    I quickly transitioned to fullstack web dev, and finally
                    ended in{' '}
                    <a
                        className='hover:text-blue-400'
                        href='https://en.wikipedia.org/wiki/Front-end_web_development'
                        target='_blank'
                    >
                        Frontend development
                    </a>
                    . Nowadays my main concern is becoming the best version of
                    myself, related and non-related to coding.
                </p>
                <p>
                    When I&#39;m not coding, I&#39;m probably hanging out with
                    my friends, or playing videogames at home with my{' '}
                    <a
                        className='hover:text-blue-400'
                        href='https://dictionary.cambridge.org/dictionary/english/cat'
                        target='_blank'
                    >
                        2 cats
                    </a>{' '}
                    (they just look).
                </p>
            </div>
        </section>
    )
}

export default forwardRef(About)
