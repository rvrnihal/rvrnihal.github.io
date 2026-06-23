import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import GithubStats from '../components/GithubStats'
import { DefaultSEO } from '../lib/seo'

export default function Home() {
  return (
    <>
      <DefaultSEO />
      <main className="min-h-screen bg-white text-slate-900 dark:bg-slate-900 dark:text-white">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <Hero />
          <About />
          <Skills />
          <GithubStats />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  )
}
