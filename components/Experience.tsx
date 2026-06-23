export default function Experience() {
  const items = [
    {
      role: 'Front-End Developer Intern | Adani Wilmar',
      date: 'Feb 2025 – Mar 2025',
      bullets: ['Developed and optimized Flutter-based PWAs', 'Improved performance and cross-platform compatibility']
    },
    {
      role: 'Data Engineering Intern | Eduskills & AICTE',
      date: 'Feb 2025 – Mar 2025',
      bullets: ['Built AWS ETL pipelines', 'Optimized serverless data workflows']
    },
    {
      role: 'Research Intern – LLM & Data Engineering | IIIT',
      date: 'May 2025 – Jun 2025',
      bullets: ['NLP pipelines', 'LLM evaluation and data processing frameworks']
    }
  ]
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">Experience</h2>
      <div className="mt-4 space-y-4">
        {items.map(i => (
          <div key={i.role} className="p-4 border rounded">
            <div className="flex justify-between">
              <div className="font-medium">{i.role}</div>
              <div className="text-sm text-slate-500">{i.date}</div>
            </div>
            <ul className="mt-2 list-disc ml-5 text-sm text-slate-600">
              {i.bullets.map(b => <li key={b}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
