import { projects } from '../utils/projects';
import ProjectCard from './project-card';

const Projects = () => {
    return (
        <section className='flex flex-col min-h-screen w-full flex justify-around items-center'>
            <div className='flex items-center w-full'>
                <div className='h-[1px] w-[100px] bg-white' />
                <p className='mx-2 text-xl'>Projects</p>
                <div className='h-[1px] flex-grow bg-white' />
            </div>
            <div className='flex justify-evenly w-full'>
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
