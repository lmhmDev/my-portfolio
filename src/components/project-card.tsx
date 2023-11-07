import { Project } from "@/utils/types"
import TechTag from "./technologyTag"

interface Props {
    project: Project
}

const ProjectCard = ({ project }: Props) => {
    return (
        <article className='rounded-sm flex gap-3 mb-12 w-full'>
            <div className='w-[25%] mt-1'>
                <img src={project.imgUrl} alt='project image' className='w-full rounded border border-[1px] border-white border-opacity-50' />
            </div>
            <div className='w-[75%]'>
                <p className='leading-tight text-slate-200'>{project.name}</p>
                <p className='text-sm leading-normal mt-2 mb-4 text-gray-400'>{project.description}</p>
                <ul className='flex gap-2 flex-wrap'>
                    {project.technologies.map(tech => {
                        return <TechTag key={tech} technology={tech} />
                    })}
                </ul>
            </div>
        </article>
    )
}

export default ProjectCard
