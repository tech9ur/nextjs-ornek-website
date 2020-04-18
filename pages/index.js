import Layout from '../components/layout'
import Head from 'next/head'

function HomePage() {
  return (
    <Layout>
        <Head>
        <title>Merhaba Anasayfa</title>
      </Head>
      <h1>Merhaba Anasayfa</h1>
      <style jsx>{`
        h1 {
          color:yellow;
        }
      `}</style>
      <style global jsx>{`
        body {
          background: black;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage
