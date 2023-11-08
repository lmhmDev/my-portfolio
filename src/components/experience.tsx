import { jobs } from '@/utils/jobs'
import JobCard from './job-card'

export default function Experience() {
    return (
        <section className='mb-16 min-h-fit w-full lg:mb-24'>
            <div className='flex flex-col items-start justify-center'>
                <p className='mb-10 text-xl lg:hidden'>Experience</p>
                {jobs.map((job) => {
                    return <JobCard key={job.company} job={job} />
                })}
            </div>
        </section>
    )
}
