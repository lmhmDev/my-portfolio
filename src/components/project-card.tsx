import { Project } from '@/utils/types'
import Link from 'next/link'
import TechTag from './technologyTag'

interface Props {
    project: Project
}

const ProjectCard = ({ project }: Props) => {
    return (
        <Link href={project.url} target='_blank' className='group relative mb-12 flex w-full flex-col-reverse gap-3 rounded-sm md:flex-row lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer transition'>
            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg' />
            <div className='mt-3 w-[50%] max-w-[300px] md:mt-1 md:w-[25%] z-10'>
                <img
                    src={project.imgUrl}
                    alt='project image'
                    className='w-full rounded border border-[1px] border-white border-opacity-50'
                />
            </div>
            <div className='w-full md:w-[75%] z-10'>
                <p className='leading-tight text-slate-200 lg:group-hover:text-blue-400 lg:group-hover:-translate-y-[2px] transition'>{project.name}</p>
                <p className='mb-4 mt-2 text-sm leading-normal text-gray-400'>
                    {project.description}
                </p>
                <ul className='flex flex-wrap gap-2'>
                    {project.technologies.map((tech) => {
                        return <TechTag key={tech} technology={tech} />
                    })}
                </ul>
            </div>
        </Link>
    )
}

export default ProjectCard
