import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'rvrnihal.github.io',
    description: 'Next.js TypeScript portfolio website with SEO, GitHub analytics, and deployment support.',
    href: 'https://github.com/rvrnihal/rvrnihal.github.io',
    live: 'https://rvrnihal-github-io.vercel.app/'
  },
  {
    title: 'DynoCollect',
    description: 'Research-focused data collection platform built with Python and Streamlit.',
    href: 'https://github.com/rvrnihal/DynoCollect',
    live: 'https://dynocollect.streamlit.app/'
  },
  {
    title: 'indibuy',
    description: 'E-commerce marketplace UI and product ordering experience deployed on Vercel.',
    href: 'https://github.com/rvrnihal/indibuy',
    live: 'https://indibuy.vercel.app'
  },
  {
    title: 'Parkzin',
    description: 'Smart parking platform for reservations, availability, and admin workflows.',
    href: 'https://github.com/rvrnihal/Parkzin'
  },
  {
    title: 'rvrnihal',
    description: 'Personal repository and profile workspace for experiments and utilities.',
    href: 'https://github.com/rvrnihal/rvrnihal'
  },
  {
    title: 'NutriCare+',
    description: 'AI health and nutrition app built with Flutter and Firebase.',
    href: 'https://github.com/rvrnihal/nutricare'
  },
  {
    title: 'vibe-cafe',
    description: 'Flutter mobile cafe experience with ordering flows and responsive UI.',
    href: 'https://github.com/rvrnihal/vibe-cafe',
    live: 'https://vibe-cafe-mauve.vercel.app'
  },
  {
    title: 'Next-Gen-AI-Solution-for-Academic-Integrity-and-Attendance-Management',
    description: 'Forked AI attendance and academic integrity system for computer vision workflows.',
    href: 'https://github.com/rvrnihal/Next-Gen-AI-Solution-for-Academic-Integrity-and-Attendance-Management'
  }
]

export default function Projects() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Projects from GitHub</h2>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        {projects.map(p => <ProjectCard key={p.title} {...p} />)}
      </div>
    </section>
  )
}
