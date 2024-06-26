import Head from 'next/head'
import { CMS_NAME, HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        href="/static/favicon.ico"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="title"
        content="Tradescoop Blog App"
      />
      <meta
        name="description"
        content={`Dynamic Blog App built by Next.js & Sanity CMS`}
      />
      <meta
        name="og:title"
        content="Tradescoop Blog App"
      />
      <meta
        name="og:description"
        content={`Dynamic Blog App built by Next.js & Sanity CMS`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
