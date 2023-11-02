import GithubIcon from "./icons/github-icon"
import LinkedinIcon from "./icons/linkedin-icon"

const Header = () => {
	return (
		<header className='lg:sticky lg:top-0 lg:max-h-screen lg:w-1/2 flex min-h-screen w-full flex-col pt-24 lg:w-1/2 lg:py-24 justify-between'>
			<section>
				<h1 className='text-5xl font-bold'>Lorenzo Hermoso</h1>
				<p className='text-2xl mt-2  text-blue-400'>Software Developer</p>
				<p className='font-light opacity-75 mt-6'>
					I enjoy building stuff that lives on the internet.<br />Passionate about tech and web development.
				</p>
			</section>
			<section className='flex gap-2 items-center'>
				<a href="https://github.com/lmhmDev" className='opacity-50 hover:opacity-100 w-7'>
					<GithubIcon />
				</a>
				<a href="https://www.linkedin.com/in/lorenzo-hermoso/" className='opacity-50 hover:opacity-100 w-10'>
					<LinkedinIcon />
				</a>
			</section>
		</header>
	)
}

export default Header
