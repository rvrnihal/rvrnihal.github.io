export default function ProjectCard({ title, description, href, live }: { title: string, description: string, href?: string, live?: string }) {
  return (
    <div className="p-4 border rounded">
      <div className="flex justify-between items-start">
        <h3 className="font-semibold">{title}</h3>
        <div className="text-sm">
          {live && <a href={live} className="text-blue-600 ml-2">Live</a>}
          {href && <a href={href} className="ml-2 text-blue-600">Code</a>}
        </div>
      </div>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div>
  )
}
