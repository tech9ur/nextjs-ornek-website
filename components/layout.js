import Head from 'next/head'
import Navigation from '../components/navigation'

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Merhaba Web Sitemize Hoşgeldiniz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navigation />
      <main>{children}</main>
      <footer>Tasarım ElaMix</footer>
    </div>
  )
}
export default Layout
