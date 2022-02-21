import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Birthday Reminder</title>
        <meta name="description" content="Remember them birthdays..." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <div className="bg-bgColor min-h-screen pt-14 md:pt-3 md:pb-24">
        <div className="container p-4 lg:max-w-4xl md:max-w-2xl">

          <Component {...pageProps} />
        </div>
      </div>

    </>
  )
}

export default MyApp
