import { jobs } from '@/utils/jobs'
import { ForwardedRef, forwardRef, useState } from 'react'
import JobCard from './job-card'

interface Props {}

const Experience: React.ForwardRefRenderFunction<HTMLElement, Props> = (
    props,
    ref
) => {
    const [activeCard, setActiveCard] = useState<string | null>()

    return (
        <section
            className='mb-16 min-h-fit w-full scroll-mt-24 lg:mb-24'
            id='experience'
            ref={ref}
            onMouseLeave={() => setActiveCard(null)}
        >
            <p className='sticky top-0 z-20 mb-10 bg-background/90 py-4 text-xl lg:hidden'>
                Experience
            </p>
            <div className='flex flex-col items-start justify-center'>
                <div className='group/list'>
                    {jobs.map((job) => {
                        return <JobCard key={job.company} job={job} />
                    })}
                </div>
            </div>
        </section>
    )
}

export default forwardRef(Experience)
