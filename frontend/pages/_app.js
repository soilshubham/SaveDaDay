import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Birthday Reminder</title>
        <meta name="description" content="Remember them birthdays..." />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
