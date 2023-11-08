import { jobs } from '@/utils/jobs'
import JobCard from './job-card'

export default function Experience() {
    return (
        <section className='min-h-fit mb-16 lg:mb-24 w-full'>
            <div className='flex flex-col items-start justify-center'>
                <p className='mb-10 lg:hidden text-xl'>Experience</p>
                {jobs.map((job) => {
                    return <JobCard key={job.company} job={job} />
                })}
            </div>
        </section>
    )
}
