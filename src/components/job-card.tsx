import { job } from '@/utils/types'
import TechTag from './technologyTag'

interface Props {
    job: job
}

const JobCard = ({ job }: Props) => {
    return (
        <article className='group relative mb-12 flex w-full flex-col gap-2 rounded-sm lg:flex-row p-3 transition lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />
            <p className='z-10 mb-1 mt-[0.22rem] min-w-[25%] text-xs font-medium uppercase tracking-wide text-blue-400 opacity-75 lg:mb-0'>
                {job.date}
            </p>
            <div className='lg:w-[75%] z-10'>
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
