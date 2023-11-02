import { job } from "@/utils/types"
import TechTag from "./technologyTag"

interface Props {
    job: job
}

const JobCard = ({ job }: Props) => {
    return (
        <div className='rounded-sm flex gap-2 mb-12 p-4 w-full'>
            <p className='min-w-[25%] text-blue-400 opacity-75 uppercase font-medium text-xs mt-1 tracking-wide'>
                {job.date}
            </p>
            <div className='w-[75%]'>
                <p className='leading-tight text-slate-200'>{job.position} · {job.company}</p>
                <p className='text-sm leading-normal mt-2 mb-4 text-gray-400'>{job.description}</p>
                <ul className='flex gap-2 flex-wrap'>
                    {job.technologies.map(tech => {
                        return <li key={tech}><TechTag technology={tech} /></li>
                    })}

                </ul>
            </div>
        </div>
    )
}

export default JobCard
