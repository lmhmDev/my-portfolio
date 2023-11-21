import { job } from '@/utils/types'
import TechTag from './technologyTag'

interface Props {
    job: job
}

const JobCard = ({ job }: Props) => {
    return (
        <article className='mb-12 flex w-full flex-col gap-2 rounded-sm lg:flex-row'>
            <p className='z-10 mb-1 mt-[0.22rem] min-w-[25%] text-xs font-medium uppercase tracking-wide text-blue-400 opacity-75 lg:mb-0'>
                {job.date}
            </p>
            <div className='z-10 lg:w-[75%]'>
                <p className='leading-tight text-slate-200'>
                    {job.position} · {job.company}
                </p>
                <p className='mb-4 mt-2 text-sm leading-normal text-gray-400'>
                    {job.description}
                </p>
                <ul className='flex flex-wrap gap-2'>
                    {job.technologies.map((tech) => {
                        return <TechTag technology={tech} key={tech} />
                    })}
                </ul>
            </div>
        </article>
    )
}

export default JobCard
