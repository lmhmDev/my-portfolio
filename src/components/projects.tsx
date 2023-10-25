import { projects } from '../utils/projects';
import ProjectCard from './project-card';

{/* <section className='flex flex-col min-h-screen flex justify-around rounded items-center bg-[#282828] border mx-3 border-b-[65px] border-[24px] border-[#deddd9] relative '>
            <div className='absolute -bottom-14 right-0 flex gap-6'>
                <div className='w-[45px] h-[45px] rounded-full bg-[#deddd9] border border-[#282828] flex justify-center items-center'>
                    <svg className='w-8' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                        <g stroke='#282828' strokeLinecap='round'>
                            <path d='M6.343 6.343a8 8 0 1011.314 0M12 8V4'></path>
                        </g>
                    </svg>
                </div> */}

const Projects = () => {
    return (
        <section className='min-h-screen w-full flex flex-col justify-around items-center'>
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
