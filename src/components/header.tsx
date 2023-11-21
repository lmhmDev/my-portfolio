import GithubIcon from './icons/github-icon'
import LinkedinIcon from './icons/linkedin-icon'

interface Props {
    activeSection: string | null
}

const Header = ({ activeSection }: Props) => {
    const sections = {
        about: 'section1',
        experience: 'section2',
        projects: 'section3',
    }

    return (
        <header className='flex w-full flex-col justify-between pt-6 lg:sticky lg:top-0 lg:max-h-screen lg:min-h-screen lg:w-1/2 lg:w-1/2 lg:py-24 lg:pt-24'>
            <section className='z-10 mb-14'>
                <h1 className='text-5xl font-bold'>Lorenzo Hermoso</h1>
                <p className='mt-2 text-2xl  text-blue-400'>
                    Software Developer
                </p>
                <p className='mt-6 font-light opacity-75'>
                    I enjoy building stuff that lives on the internet.
                    <br />
                    Passionate about tech and web development.
                </p>
                <div className='mt-16 flex hidden flex-col gap-4 lg:flex'>
                    <a
                        href='/#about'
                        className={`group flex w-fit items-center text-sm font-semibold tracking-widest ${activeSection === sections.about
                                ? 'opacity-100'
                                : 'opacity-50'
                            } hover:opacity-100`}
                    >
                        <div
                            className={`mr-2 h-[1px] rounded-sm bg-white transition-[1s] ${activeSection === sections.about
                                    ? 'w-[5rem]'
                                    : 'w-[3rem]'
                                } group-hover:w-[5rem]`}
                        />
                        ABOUT
                    </a>
                    <a
                        href='/#experience'
                        className={`group flex w-fit items-center text-sm font-semibold tracking-widest ${activeSection === sections.experience
                                ? 'opacity-100'
                                : 'opacity-50'
                            } hover:opacity-100`}
                    >
                        <div
                            className={`mr-2 h-[1px]  rounded-sm bg-white transition-[1s] ${activeSection === sections.experience
                                    ? 'w-[5rem]'
                                    : 'w-[3rem]'
                                } group-hover:w-[5rem]`}
                        />
                        EXPERIENCE
                    </a>
                    <a
                        href='/#projects'
                        className={`group flex w-fit items-center text-sm font-semibold tracking-widest ${activeSection === sections.projects
                                ? 'opacity-100'
                                : 'opacity-50'
                            } hover:opacity-100`}
                    >
                        <div
                            className={`mr-2 h-[1px] rounded-sm bg-white transition-[1s] ${activeSection === sections.projects
                                    ? 'w-[5rem]'
                                    : 'w-[3rem]'
                                } group-hover:w-[5rem]`}
                        />
                        PROJECTS
                    </a>
                </div>
            </section>
            <section className='flex items-center gap-2'>
                <a
                    href='https://github.com/lmhmDev'
                    className='w-7 opacity-50 transition hover:opacity-100'
                    target='_blank'
                >
                    <GithubIcon />
                </a>
                <a
                    href='https://www.linkedin.com/in/lorenzo-hermoso/'
                    className='w-10 opacity-50 transition hover:opacity-100'
                    target='_blank'
                >
                    <LinkedinIcon />
                </a>
            </section>
        </header>
    )
}

export default Header
