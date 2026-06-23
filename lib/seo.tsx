import Head from 'next/head'

export function DefaultSEO() {
  const title = 'Rao Venkata Ramnihal — Software Engineer'
  const desc = 'Software Engineer | Full Stack | Flutter | AI & Data Engineering Enthusiast — Portfolio of projects, experience and contact.'
  const url = 'https://rvrnihal.github.io/'
  const image = `${url}avatar.png`
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="manifest" href="/manifest.json" />
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Rao Venkata Ramnihal",
          "url": "https://rvrnihal.github.io/",
          "sameAs": ["https://github.com/rvrnihal","https://linkedin.com/in/rvrnihal"],
          "jobTitle": "Software Engineer",
          "description": "Full Stack Engineer, Flutter Developer, AI & Data Engineering Enthusiast"
        }`}
      </script>
    </Head>
  )
}
