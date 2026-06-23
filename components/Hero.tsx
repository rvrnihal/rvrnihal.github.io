import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 py-12">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl font-extrabold">Rao Venkata Ramnihal</h1>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">Software Engineer • Full Stack • Flutter • AI & Data Engineering Enthusiast</p>
        <div className="mt-6 flex gap-4">
          <a href="/resume.pdf" download className="px-4 py-2 bg-slate-900 text-white rounded">Download Resume</a>
          <a href="mailto:rvrnihal@gmail.com" className="px-4 py-2 border rounded">Contact</a>
        </div>
      </div>
      <div className="w-40 h-40 relative">
        <Image src="/avatar.svg" alt="avatar" fill sizes="(max-width: 768px) 100vw, 200px" />
      </div>
    </section>
  )
}
