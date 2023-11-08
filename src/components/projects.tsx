import { projects } from '../utils/projects'
import ProjectCard from './project-card'

const Projects = () => {
    return (
        <section className='h-fit w-full'>
            <div className='flex flex-col items-start justify-center'>
                <p className='mb-10 text-xl lg:hidden'>Projects</p>
                {projects.map((project) => {
                    return <ProjectCard key={project.name} project={project} />
                })}
            </div>
        </section>
    )
}

export default Projects
