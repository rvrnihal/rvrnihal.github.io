import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'DynoCollect',
    description: 'Research-focused data collection platform (Streamlit, Python).',
    href: 'https://github.com/rvrnihal/DynoCollect',
    live: 'https://dynocollect.streamlit.app/'
  },
  {
    title: 'NutriCare+',
    description: 'AI health & nutrition mobile app built with Flutter.',
    href: 'https://github.com/rvrnihal/nutricare'
  },
  {
    title: 'ParkzIN',
    description: 'Smart parking platform with reservations and admin dashboard.',
    href: 'https://github.com/rvrnihal/Parkzin'
  },
  {
    title: 'IndiBuy',
    description: 'E-commerce marketplace UI, deployed on Vercel.',
    href: 'https://github.com/rvrnihal/indibuy',
    live: 'https://indibuy.vercel.app'
  }
]

export default function Projects() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Featured Projects</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
