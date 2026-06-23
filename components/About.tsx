export default function About() {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">About</h2>
      <p className="mt-3 text-slate-700 dark:text-slate-300">Computer Science Engineering student with hands-on experience in Full Stack Development, Flutter, AI applications, Data Engineering and Cloud platforms. Passionate about building scalable products and research-driven AI solutions.</p>
      <div className="mt-4 grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="font-medium">Education</h3>
          <p className="text-sm text-slate-600">B.Tech Computer Science & Engineering — ACE Engineering College — CGPA: 7.45/10</p>
        </div>
        <div>
          <h3 className="font-medium">Career Goals</h3>
          <p className="text-sm text-slate-600">Grow as a Full Stack engineer working on AI-first products and data systems at scale.</p>
        </div>
      </div>
    </section>
  )
}
