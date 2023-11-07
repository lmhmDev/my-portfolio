import About from '@/components/about'
import Experience from '@/components/experience'
import Header from '@/components/header'
import Projects from '@/components/projects'

export default function Home() {
  return (
    <div className='lg:flex lg:justify-between lg:gap-4'>
      <Header />
      <main className='pt-24 lg:w-1/2 lg:py-24'>
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  )
}
