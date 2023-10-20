import { Project, technology } from "@/utils/types"
import TechTag from "./technologyTag"
import { technologies } from '../utils/technologies';

interface Props {
    project: Project
}

const ProjectCard = ({ project }: Props) => {
    return (
        <article className='flex text-background' >
            <div className='flex h-[400px] w-[350px] flex-col justify-between rounded-sm bg-white p-2'>
                <div>
                    <div className='h-[200px] w-full bg-background'>
                        <img className='h-full object-cover' src={project.imgUrl} alt="" />
                    </div>
                    <p className='text-xl my-2'>{`${project.name}`}</p>
                    <p>{project.description}</p>
                </div>
                <div className='flex justify-end'>
                    {project.technologies.map(technology => {
                        const tech = technologies.find(tech => tech.name === technology)
                        if (!tech) return
                        return <TechTag key={tech.name} technology={tech} />
                    })}
                </div>
            </div>
        </article>
    )
}

export default ProjectCard
