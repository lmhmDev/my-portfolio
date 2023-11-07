import { projects } from '../utils/projects';
import ProjectCard from './project-card';

const Projects = () => {
    return (
        <section className='h-fit w-full'>
            <div className='flex flex-col justify-center items-start'>
                {
                    projects.map(project => {
                        return <ProjectCard key={project.name} project={project} />
                    })
                }
            </div>
        </section>
    )
}

export default Projects
