import { useRouter } from 'next/router'
import { DefaultSEO } from '../../lib/seo'

export default function ProjectPage() {
  const router = useRouter()
  const { slug } = router.query
  return (
    <>
      <DefaultSEO />
      <div className="max-w-4xl mx-auto py-12 px-6">
        <h1 className="text-3xl font-semibold">{slug}</h1>
        <p className="mt-4">Project case study coming soon.</p>
      </div>
    </>
  )
}
