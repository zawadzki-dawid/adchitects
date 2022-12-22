import cache from '../api/cache'
import pagesApi, { type Page } from '../api/pages'
import pageApi, { type PageData } from '../api/page'

// Components
import Layout from '../components/layout/Layout'

const CACHE_NAME = 'pages.json'

interface Props extends Pick<PageData, 'sections'> {
  pages: Page[]
}

export default function Page({ pages, sections }: Props) {
  return (
    <Layout
      pages={pages}
      sections={sections}
    />
  )
}

export async function getStaticPaths() {
  let pages = await cache.get<Page[]>(CACHE_NAME)
  if (!pages) {
    pages = await pagesApi.fetch()
    await cache.set(CACHE_NAME, JSON.stringify(pages))
  }

  return {
    fallback: false,
    paths: pages.map(({ url }) => ({
      params: {
        page: url === '/' ? [] : [url.replace('/', '')]
      }
    }))
  }
}

export async function getStaticProps(context: any) {
  const url = context.params.page ? `/${context.params.page}` : '/'
  const pages = await cache.get<Page[]>(CACHE_NAME)
  const page = pages?.find((page) => page.url === url)
  if (!page) {
    return {
      notFound: true
    }
  }

  const data = await pageApi.fetch(page.id)
  return {
    props: {
      pages,
      sections: data.sections
    }
  }
}
