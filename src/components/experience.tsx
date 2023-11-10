import { jobs } from '@/utils/jobs'
import { ForwardedRef, forwardRef } from 'react'
import JobCard from './job-card'

interface Props { }

const Experience: React.ForwardRefRenderFunction<HTMLElement, Props> = (props, ref) => {
    return (
        <section
            className='mb-16 min-h-fit w-full scroll-mt-16 lg:mb-24'
            id='experience'
            ref={ref}
        >
            <div className='flex flex-col items-start justify-center'>
                <p className='mb-10 text-xl lg:hidden'>Experience</p>
                {jobs.map((job) => {
                    return <JobCard key={job.company} job={job} />
                })}
            </div>
        </section>
    )
}

export default forwardRef(Experience)
