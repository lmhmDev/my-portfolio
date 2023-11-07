import GithubIcon from "./icons/github-icon"
import LinkedinIcon from "./icons/linkedin-icon"

const Header = () => {
	return (
		<header className='lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 flex lg:min-h-screen w-full flex-col pt-6 lg:pt-24 lg:w-1/2 lg:py-24 justify-between'>
			<section className='mb-14'>
				<h1 className='text-5xl font-bold'>Lorenzo Hermoso</h1>
				<p className='text-2xl mt-2  text-blue-400'>Software Developer</p>
				<p className='font-light opacity-75 mt-6'>
					I enjoy building stuff that lives on the internet.<br />Passionate about tech and web development.
				</p>
			</section>
			<section className='flex flex-col gap-4 hidden lg:flex'>
				<a href='' className='group w-fit opacity-50 hover:opacity-100 flex items-center text-sm tracking-widest font-semibold'>
					<div className='group-hover:w-[5rem] transition-[1s] w-[3rem] h-[1px] bg-white rounded-sm mr-2' />
					ABOUT
				</a>
				<a href='' className='group w-fit opacity-50 hover:opacity-100 flex items-center text-sm tracking-widest font-semibold'>
					<div className='group-hover:w-[5rem] transition-[1s] w-[3rem] h-[1px] bg-white rounded-sm mr-2' />
					EXPERIENCE
				</a>
				<a href='' className='group w-fit opacity-50 hover:opacity-100 flex items-center text-sm tracking-widest font-semibold'>
					<div className='group-hover:w-[5rem] transition-[1s] w-[3rem] h-[1px] bg-white rounded-sm mr-2' />
					PROJECTS
				</a>
			</section>
			<section className='flex gap-2 items-center'>
				<a href="https://github.com/lmhmDev" className='opacity-50 hover:opacity-100 w-7 transition'>
					<GithubIcon />
				</a>
				<a href="https://www.linkedin.com/in/lorenzo-hermoso/" className='opacity-50 hover:opacity-100 w-10 transition'>
					<LinkedinIcon />
				</a>
			</section>
		</header>
	)
}

export default Header
