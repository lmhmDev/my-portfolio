import { jobs } from '@/utils/jobs'
import JobCard from './job-card'

export default function Experience() {
    return (
        <section className='min-h-screen w-full'>
            <div className='flex flex-col items-start justify-center'>
                {jobs.map((job) => {
                    return <JobCard key={job.company} job={job} />
                })}
            </div>
        </section>
    )
}
