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
        <div className="bg-bgColor min-h-screen pt-14 md:pt-3 md:pb-24">
          <div className="container p-4 lg:max-w-5xl md:max-w-2xl">
            <Component {...pageProps} />
          </div>
        </div>
      </AuthProvider>

    </>
  )
}

export default MyApp