import '../styles/globals.css'
import Head from 'next/head'
import Navbar from '../components/Navbar'

import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {



  return (
    <>
      <Head>
        <title>SaveDaDay - Birthday Reminder</title>
        <meta name="description" content="Don't Forget them birthdays..." />
      </Head>
      <AuthProvider>
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>

    </>
  )
}

export default MyApp
