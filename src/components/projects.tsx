import { ForwardedRef, forwardRef } from 'react'
import { projects } from '../utils/projects'
import ProjectCard from './project-card'

interface Props {}

const Projects: React.ForwardRefRenderFunction<HTMLElement, Props> = (
    props,
    ref
) => {
    return (
        <section className='h-fit w-full scroll-mt-28' id='projects' ref={ref}>
            <p className='sticky top-0 z-20 mb-10 bg-background/90 py-4 text-xl lg:hidden'>
                Projects
            </p>
            <div className='flex flex-col items-start justify-center'>
                <div className='group/list'>
                    {projects.map((project) => {
                        return (
                            <ProjectCard key={project.name} project={project} />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default forwardRef(Projects)
