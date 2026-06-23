import React, { useEffect, useState } from 'react'

type Repo = { language: string | null }

export default function GithubStats() {
  const [repos, setRepos] = useState<Repo[]>([])
  const [user, setUser] = useState<{ public_repos?: number; followers?: number } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [uRes, rRes] = await Promise.all([
          fetch('https://api.github.com/users/rvrnihal'),
          fetch('https://api.github.com/users/rvrnihal/repos?per_page=100')
        ])
        const u = await uRes.json()
        const r = await rRes.json()
        setUser(u)
        if (Array.isArray(r)) setRepos(r)
      } catch (e) {
        console.error('GitHub fetch error', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const langCounts = repos.reduce<Record<string, number>>((acc, cur) => {
    const lang = cur.language || 'Unknown'
    acc[lang] = (acc[lang] || 0) + 1
    return acc
  }, {})

  return (
    <section className="mt-10">
      <h2 className="text-2xl font-semibold">GitHub</h2>
      {loading && <p className="mt-2 text-sm text-slate-600">Loading GitHub stats…</p>}
      {!loading && (
        <div className="mt-3 grid md:grid-cols-3 gap-4">
          <div className="p-4 border rounded">
            <div className="text-sm text-slate-500">Public Repos</div>
            <div className="text-xl font-medium">{user?.public_repos ?? '—'}</div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-sm text-slate-500">Followers</div>
            <div className="text-xl font-medium">{user?.followers ?? '—'}</div>
          </div>
          <div className="p-4 border rounded">
            <div className="text-sm text-slate-500">Languages</div>
            <div className="mt-2 text-sm">
              {Object.entries(langCounts).slice(0, 6).map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <span>{k}</span>
                  <span className="text-slate-500">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
