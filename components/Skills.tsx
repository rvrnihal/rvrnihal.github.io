const skills = [
  'Java', 'Python', 'C', 'JavaScript',
  'HTML5', 'CSS3', 'React', 'Flutter', 'Node.js', 'SQL', 'Firebase', 'AWS'
]

export default function Skills() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Skills</h2>
      <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
        {skills.map(s => (
          <div key={s} className="p-3 border rounded bg-white/50 dark:bg-slate-700/40">
            {s}
          </div>
        ))}
      </div>
    </section>
  )
}
