import { job } from '@/utils/types'
import TechTag from './technologyTag'

interface Props {
    job: job
}

const JobCard = ({ job }: Props) => {
    return (
        <article className='mb-12 flex flex-col lg:flex-row w-full gap-2 rounded-sm'>
            <p className='mb-1 lg:mb-0 mt-1 min-w-[25%] text-xs font-medium uppercase tracking-wide text-blue-400 opacity-75'>
                {job.date}
            </p>
            <div className='lg:w-[75%]'>
                <p className='leading-tight text-slate-200'>
                    {job.position} · {job.company}
                </p>
                <p className='mb-4 mt-2 text-sm leading-normal text-gray-400'>
                    {job.description}
                </p>
                <ul className='flex flex-wrap gap-2'>
                    {job.technologies.map((tech) => {
                        return (
                            <li key={tech}>
                                <TechTag technology={tech} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </article>
    )
}

export default JobCard
