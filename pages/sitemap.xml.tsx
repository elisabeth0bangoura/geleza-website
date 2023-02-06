import * as fs from 'fs'
const Sitemap = () => {
  return null
}

export const getServerSideProps = async ({ res }: any) => {
  const BASE_URL = 'https://geleza.app'

  const staticPaths = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return ![
        'index.tsx',
        '_app.tsx',
        '_document.tsx',
        'faq.tsx',
        'help.tsx',
        'how-it-works.tsx',
        'pricing.tsx',
        'terms.tsx',
        'sitemap.xml.tsx',
        'privacy.tsx',
      ].includes(staticPage)
    })
    .map((staticPagePath) => {
      return `${BASE_URL}/${staticPagePath}`
    })

  const dynamicPaths: any = []

  const allPaths = [...staticPaths, ...dynamicPaths]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `
        })
        .join('')}
    </urlset>
  `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}

export default Sitemap
