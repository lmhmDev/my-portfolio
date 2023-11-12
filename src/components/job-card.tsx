import { job } from '@/utils/types'
import TechTag from './technologyTag'

interface Props {
    job: job
    isActive: boolean | null
    setActive: (active: string) => void
}

const JobCard = ({ job, isActive, setActive }: Props) => {
    return (
        <article onMouseEnter={() => setActive(job.company)} className={`mb-12 flex w-full flex-col gap-2 rounded-sm lg:flex-row p-3 transition ${isActive !== null ? isActive ? ' bg-gray-400 rounded-md backdrop-filter backdrop-blur-3xl bg-opacity-10' : 'opacity-50' : ''}`}>
            <p className='mb-1 mt-[0.22rem] min-w-[25%] text-xs font-medium uppercase tracking-wide text-blue-400 opacity-75 lg:mb-0'>
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
