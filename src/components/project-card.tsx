import { Project } from '@/utils/types'
import TechTag from './technologyTag'

interface Props {
  project: Project
}

const ProjectCard = ({ project }: Props) => {
  return (
    <article className='mb-12 flex w-full gap-3 rounded-sm'>
      <div className='mt-1 w-[25%]'>
        <img
          src={project.imgUrl}
          alt='project image'
          className='w-full rounded border border-[1px] border-white border-opacity-50'
        />
      </div>
      <div className='w-[75%]'>
        <p className='leading-tight text-slate-200'>{project.name}</p>
        <p className='mb-4 mt-2 text-sm leading-normal text-gray-400'>
          {project.description}
        </p>
        <ul className='flex flex-wrap gap-2'>
          {project.technologies.map((tech) => {
            return <TechTag key={tech} technology={tech} />
          })}
        </ul>
      </div>
    </article>
  )
}

export default ProjectCard
